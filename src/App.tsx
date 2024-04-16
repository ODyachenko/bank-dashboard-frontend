import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
    </Router>
  );
}

export default App;
