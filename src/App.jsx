import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>    
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App