import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import Home from './components/Home';
import Start from './components/Start';


function App() {

  return (
    <div className='appContainer'>
      <nav>
        <Link to="/">
          <button className='home-button'>Home</button>
        </Link>
        <p className='nav-brand-name'>Anchit Chandran</p>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/start" element={<Start />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
