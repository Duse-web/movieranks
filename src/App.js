import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Action from './pages/Action';
import Comedy from './pages/Comedy';
import Horror from './pages/Horror';
import Romance from './pages/Romance';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/action" element={<Action/>}/>
    <Route path="/comedy" element={<Comedy/>}/>
    <Route path="/horror" element={<Horror/>}/>
    <Route path="/romance" element={<Romance/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
