import GateEntryForm from '../components/GateEntryForm';
import GateList from '../components/GateList';
import styles from '../styles/main.module.scss';

const GateManagement: React.FC = () => (
  <div className={styles.gateManagement}>
    <h1>Gate Management</h1>
    <GateEntryForm />
    <GateList />
  </div>
);

export default GateManagement;
