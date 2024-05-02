import { Outlet } from "react-router-dom"
import './App.css';
import MainNavBar from './components/MainNavBar';

function App() {
  return (
    <>
    <header>
      <MainNavBar />
    </header>
    <main style={{height:"calc(100dvh - 100px)"}} className="bg-gray-100">
      <Outlet />
    </main>
    </>
  );
}

export default App;
