import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Component }  from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register.jsx/Register';
import Home from './pages/Home/Home';
import './App.css';
import Product from "./pages/Product/Product";
import { Checkout } from './pages/Checkout/Checkout';
import Topbar from './components/topbar/Topbar';


/*TODO:

  - vyřešit problém s position sticky (sidebar, tabulka v checkout)
  - vyřešit problém se šírkou sidebaru (při FULL HD rozlišení dělá problém)
  - doplnit platební metody
  - doplnit dokončení objednávky
  - dodělat regitraci 
  - dodělat uživatele do localstorage a předvyplnění dat dle uživatele
  - dodělat sortování mangy
  - dodělat selekcti bestseller/new/sale
  - dodělat footer
  - dodělat vyskakovací okno pro login
  - doplnit více dat


*/




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
