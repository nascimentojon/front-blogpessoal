import React from 'react';
import Login from "./paginas/login/Login";
import Navbar from "./componets/estaticos/navbar/Navbar";
import Footer from "./componets/estaticos/footer/Footer";
import './App.css'
import Home from './paginas/home/Home'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {


  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
      <Route  path="/">
          <Login />
        </Route>
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/login">
          <Login />
        </Route>
        
          <Route path="/home">
            <Home />
           </Route>
           </Routes> 
      </div>
      <Footer />
    </Router>
  );
}

export default App
