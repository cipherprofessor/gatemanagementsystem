import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { Gatepass } from '../../../types/index';
import GatepassCard from '../../components/Bolt/GatePass/GatepassCard';

const PassesPage: React.FC = () => {
  const [passes, setPasses] = useState<Gatepass[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPasses = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.from('gatepasses').select('*');
        if (error) {
          throw error;
        }
        setPasses(data || []);
        setError(null);
      } catch (error: any) {
        console.error('Error fetching passes:', error);
        setError(error.message || 'Failed to fetch passes.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPasses();
  }, []);

  if (isLoading) {
    return <div className="text-center p-4">Loading gatepass data...</div>;
  }
  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Passes</h2>
      {passes && passes.length === 0 ? (
        <p className="text-gray-500">No gatepass requests found.</p>
      ) : (
        passes &&
        passes.map((gatepass) => (
          <GatepassCard key={gatepass.id} gatepass={gatepass} />
        ))
      )}
    </div>
  );
};

export default PassesPage;
