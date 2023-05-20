import React from 'react';
import Login from "./paginas/login/Login";
import Navbar from "./componets/estaticos/navbar/Navbar";
import Footer from "./componets/estaticos/footer/Footer";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css'
import Home from './paginas/home/Home'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";


function App() {


  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastro' element={<CadastroUsuario/>}/>
       </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App
