import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <h1>Welcome to the Gate Management System</h1>
    <Link to="/gate-management" className={styles.link}>
      Manage Gates
    </Link>
  </div>
);

export default Home;
