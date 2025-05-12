import './App.css';
import maiz from './imagenes/maiz2-removebg-preview.png';


function App() {
  return (
    <div className="App">
      <img src={maiz} className="App-icono" alt="icono"/>
        <p>
          Cuayicentli
        </p>
        {/* }<a href="./login.html">
          <button class="btn btn-succes" id="inicio">Iniciar sesión</button>
        </a>
        <a href="./crearcuenta.html">
          <button class="btn btn-success" id="registro">Registro</button>
        </a>*/}
    </div>
  );
}

export default App;
