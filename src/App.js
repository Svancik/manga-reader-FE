import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Component }  from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register.jsx/Register';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />          
          <Route exact path="/register/" element ={<Register/>}/>
          <Route exact path="/" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
