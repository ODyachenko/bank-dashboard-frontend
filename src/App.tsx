import Sidebar from './components/Sidebar/Nav';
import NavOverlay from './components/Sidebar/NavOverlay';
import Overview from './pages/Overview';

function App() {
  return (
    <main className="main lg:flex">
      <Sidebar />
      <Overview />
      <NavOverlay />
    </main>
  );
}

export default App;
