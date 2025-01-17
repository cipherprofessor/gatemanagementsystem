import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GateManagement from './pages/GateManagement';
import './styles/main.module.scss';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gate-management" element={<GateManagement />} />
    </Routes>
  </Router>
);

export default App;
