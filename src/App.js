import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/principal';
import Login from './pages/login';
import Crearcuenta from './pages/crearcuenta';
import Bienvenida from './pages/bienvenida';
import Configuracion from './pages/configuracion';
import Analisis from './pages/analisis';
import Monitoreo from './pages/monitoreo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/crearcuenta" element={<Crearcuenta/>}/>
        <Route path="/bienvenida" element={<Bienvenida/>}/>
      {/*  <Route path="/configuracion" element={<Configuracion/>}/>
        <Route path="/analisis" element={<Analisis/>}/>
        <Route path="/monitoreo" element={<Monitoreo/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
