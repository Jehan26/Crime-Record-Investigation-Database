import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Officers from './components/Officers';
import Cases from './components/Cases';
import Suspects from './components/Suspects';
import Evidence from './components/Evidence';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <img src="/handcuffs.png" alt="Handcuffs" className="handcuff-icon left" />
        <img src="/handcuffs.png" alt="Handcuffs" className="handcuff-icon right" />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Officers />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/suspects" element={<Suspects />} />
            <Route path="/evidence" element={<Evidence />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
