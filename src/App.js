import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/principal';
import Login from './pages/login';
import Crearcuenta from './pages/crearcuenta';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/crearcuenta" element={<Crearcuenta/>}/>
      </Routes>
    </Router>
  );
}

export default App;
