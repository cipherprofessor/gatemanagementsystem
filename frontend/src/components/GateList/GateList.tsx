import { useEffect, useState } from 'react';
import GateItem from '../GateItem/GateItem';
import styles from './GateList.module.scss';
import React from 'react';

interface Gate {
  id: number;
  name: string;
  description: string;
}

const GateList: React.FC = () => {
  const [gates, setGates] = useState<Gate[]>([]);

  useEffect(() => {
    // Fetch data from backend API
    setGates([
      { id: 1, name: 'Main Gate', description: 'Main entrance' },
      { id: 2, name: 'Side Gate', description: 'Side entrance' },
    ]);
  }, []);

  return (
    <div className={styles.gateList}>
      <h2>Gate List</h2>
      {gates.map((gate) => (
        <GateItem key={gate.id} gate={gate} />
      ))}
    </div>
  );
};

export default GateList;
