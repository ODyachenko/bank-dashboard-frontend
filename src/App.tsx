import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investments from './pages/Investments';
import CardsPage from './pages/CardsPage';
import Loans from './pages/Loans';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/credit-cards" element={<CardsPage />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
