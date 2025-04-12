import { Outlet } from 'react-router-dom';
import NavTabs from './components/Nav.jsx';
import './App.css';

function App() {

  return (
    <>
      <NavTabs />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
