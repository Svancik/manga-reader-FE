import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register.jsx/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element ={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
