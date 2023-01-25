import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import './App.css';
import Product from "./pages/Product/Product";
import { Checkout } from './pages/Checkout/Checkout';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />          
          <Route path="/register/" element ={<Register/>}/>
          <Route path="/product/:id" element ={<Product/>}/>    
          <Route path="/checkout" element ={<Checkout/>}/>         
          <Route exact path="/" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
