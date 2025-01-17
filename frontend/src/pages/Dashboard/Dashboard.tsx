import React from 'react';
import { Clock, Users, FileCheck, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to GatePass 2025</h1>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Clock className={`${styles.icon} text-blue-500`} />
            <div className={styles.cardTextContainer}>
              <p className={styles.cardTitle}>Active Passes1111</p>
              <p className={styles.cardValue}>0</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <Users className={`${styles.icon} text-green-500`} />
            <div className={styles.cardTextContainer}>
              <p className={styles.cardTitle}>Visitors Today</p>
              <p className={styles.cardValue}>0</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <FileCheck className={`${styles.icon} text-purple-500`} />
            <div className={styles.cardTextContainer}>
              <p className={styles.cardTitle}>Total Passes</p>
              <p className={styles.cardValue}>0</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <AlertTriangle className={`${styles.icon} text-yellow-500`} />
            <div className={styles.cardTextContainer}>
              <p className={styles.cardTitle}>Pending</p>
              <p className={styles.cardValue}>0</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.quickActions}>
        <h2 className={styles.quickActionsTitle}>Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/create-pass')}
            className={`${styles.actionButton} ${styles.actionButtonPrimary}`}
          >
            Create New Pass
          </button>
          <button
            onClick={() => navigate('/passes')}
            className={`${styles.actionButton} ${styles.actionButtonSecondary}`}
          >
            View All Passes
          </button>
        </div>
      </div>
    </div>
  );
}
