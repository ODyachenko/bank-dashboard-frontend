import Sidebar from './components/Sidebar/Nav';
import Overview from './pages/Overview';

function App() {
  return (
    <main className="main lg:flex">
      <Sidebar />
      <Overview />
    </main>
  );
}

export default App;
