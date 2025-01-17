import React from 'react';
import styles from './GateItem.module.scss';

interface GateItemProps {
  gate: {
    id: number;
    name: string;
    description: string;
  };
}

const GateItem: React.FC<GateItemProps> = ({ gate }) => (
  <div className={styles.gateItem}>
    <h3>{gate.name}</h3>
    <p>{gate.description}</p>
  </div>
);

export default GateItem;
