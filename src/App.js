import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/principal';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
