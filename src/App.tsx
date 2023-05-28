import './App.css'

import Home from './paginas/home/Home'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaPostagem from './componets/postagens/listapostagem/ListaPostagem'
import DeletarPostagem from './componets/postagens/deletarPostagem/DeletarPostagem'
import ListaTemas from './componets/temas/listatemas/ListaTema'
import CadastroTema from './componets/temas/cadastroTema/CadastroTema'
import DeletarTema from './componets/temas/deletarTema/DeletarTema'
import Navbar from './componets/estaticos/navbar/Navbar'
import Footer from './componets/estaticos/footer/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{minHeight: '85vh'}}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<CadastroUsuario />} />
            <Route path='/postagens' element={<ListaPostagem />} />
            {/* <Route path='/formularioPostagem' element={<FormularioPostagem />} />  */}
            {/* <Route path='/formularioPostagem/:id' element={<FormularioPostagem />} /> */}
            <Route path='/apagarPostagem/:id' element={<DeletarPostagem />} />
            <Route path='/temas' element={<ListaTemas />} />
            <Route path='/formularioTema' element={<CadastroTema />} />
            <Route path='/formularioTema/:id' element={<CadastroTema />} />
            <Route path='/apagarTema/:id' element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
