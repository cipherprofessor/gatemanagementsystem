import GateList from '../../components/GateList/GateList';
import GateEntryForm from '../../components/GateEntryForm/GateEntryForm';
import styles from './GateManagement.module.scss';

const GateManagement: React.FC = () => (
  <div className={styles.gateManagement}>
    <h1>Gate Management</h1>
    <GateEntryForm />
    <GateList />
  </div>
);

export default GateManagement;
