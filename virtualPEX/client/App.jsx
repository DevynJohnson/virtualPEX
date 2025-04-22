// client/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/Nav.jsx';
import AlphabetBackground from './components/AlphabetBackground.jsx';
import './App.css';

function App() {
  return (
    <>
      <AlphabetBackground />
      <NavTabs />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
