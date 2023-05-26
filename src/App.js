import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Cadastro from './components/Cadastro/CadastroFuncionario';
import Sobre from './Sobre';

function App() {
  return (
    <Router>
      <div className='App'>
       <Header />
      
        <Routes>

          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>
       <Footer />
      </div>
    </Router>
  );
}


export default App;
