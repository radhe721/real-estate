import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import About from './pages/About';
import SingIn from './pages/SingIn';
import Header from './components/Header';  // Make sure Header is imported

const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* Render Header outside of Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sign-in" element={<SingIn />} /> 
        <Route path="/sign-up" element={<Signup />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
