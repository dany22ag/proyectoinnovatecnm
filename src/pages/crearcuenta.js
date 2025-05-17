import '../App';
import {Link} from 'react-router-dom';

function Crearcuenta(){
    return(
        <div className="registro">
            <h1 className="">CREAR CUENTA</h1>
            <form className="formularioRegistro">
                <div className="mb-3">
                    <label for="exampleInputApellido1" className="form-label">Apellido:</label>
                <input type="text" className="form-control" id="exampleInputApellido1"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputApellido1" className="form-label">Apellido:</label>
                    <input type="text" className="form-control" id="exampleInputApellido1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEdad1" className="form-label">Edad:</label>
                    <input type="text" className="form-control" id="exampleInputEdad1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputUsuario1" className="form-label">Usuario:</label>
                    <input type="text" className="form-control" id="exampleInputUsuario1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputContraseña1" className="form-label">Contraseña:</label>
                    <input type="text" className="form-control" id="exampleInputContraseña1"/>
                </div>
                <div className="botones">
                    <button type="submit" className="btn btn-success">Crear cuenta</button>
                    <Link to="/login" className="link2">
                        <button type="button" className="btn btn-warning">Volver al incio de sesión</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Crearcuenta;
