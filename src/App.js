import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManualIndex from './pages/Manual/ManualIndex';
import HomeIndex from './pages/Home/HomeIndex';
import AboutIndex from './pages/About/AboutIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='Manual' element={<ManualIndex />} />
        <Route path='About' element={<AboutIndex />} />
      </Routes>
    </div>
  );
}

export default App;
