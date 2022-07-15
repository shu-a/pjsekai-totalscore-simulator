import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Instruction from './pages/Instruction/Instruction';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Instruction' element={<Instruction />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
