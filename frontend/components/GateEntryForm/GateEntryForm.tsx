import { useState } from 'react';
import styles from './';
import React from 'react';

interface GateData {
  name: string;
  description: string;
}

const GateEntryForm: React.FC = () => {
  const [gateData, setGateData] = useState<GateData>({ name: '', description: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(gateData);
    setGateData({ name: '', description: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Gate Name"
        value={gateData.name}
        onChange={(e) => setGateData({ ...gateData, name: e.target.value })}
        className={styles.input}
      />
      <textarea
        placeholder="Description"
        value={gateData.description}
        onChange={(e) => setGateData({ ...gateData, description: e.target.value })}
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Add Gate
      </button>
    </form>
  );
};

export default GateEntryForm;
