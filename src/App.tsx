import React from 'react';
import Login from "./paginas/login/Login";
import Navbar from "./componets/estaticos/navbar/Navbar";
import Footer from "./componets/estaticos/footer/Footer";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css'
import Home from './paginas/home/Home'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import ListaTemas from './componets/temas/listatemas/ListaTema';
import ListaPostagem from './componets/postagens/listapostagem/ListaPostagem';


function App() {


  return (<>
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<CadastroUsuario />} />
          <Route path='/postagens' element={<ListaPostagem />} />
          <Route path='/temas' element={<ListaTemas />} />
          {/* <Route path='/cadastrarTema' element={<CadastrarTema />} /> */}
          {/* <Route path='/deletarTema/:id' element={<DeletarTema />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App
