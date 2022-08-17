import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManualIndex from './pages/Manual/Index';
import HomeIndex from './pages/Home/Index';
import AboutIndex from './pages/About/Index';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='Manual' element={<ManualIndex />} />
        <Route path='About' element={<AboutIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
