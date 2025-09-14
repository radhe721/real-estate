import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import About from './pages/About';
import SingIn from './pages/SingIn';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/sign-in" element={<SingIn/>}/> 
      <Route path="/sign-up" element={<Signup/>}/> 
      <Route path="/about" element={<About/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App