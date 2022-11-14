import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Component }  from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register.jsx/Register';
import Home from './pages/Home/Home';
import './App.css';

/*TODO:

- upravit obrázky na slider (ať mají název v obrázku)
nahrát je na odkaz níže
https://console.firebase.google.com/u/0/project/manga-reader-36f38/storage/manga-reader-36f38.appspot.com/files
pomocí odkazu níže lze vložit obrázek do obrázku
https://overlay.imageonline.co/
pomocí odkazu níže lze udělat obrázek transperentní
https://www.remove.bg/

- vyřešit zvláštní chování hoveru na postraní buttony
*/




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
