import '../App';

function Login() {
    return (
        <div className="pagina">
            <h1 className="titulo">LOGIN</h1>
            <form className="formulario">
                <div className="mb-3">
                    <img src="../imagenes/USUARIO-removebg-preview.png" className="user"/>
                    <label for="usuario" className="form-label" id="etiqueta1">Usuario:</label>
                    <input type="text" className="form-control" id="usuario" placeholder="Ingresa tu usuario"/>
                </div>
                <div className="mb-3">
                    <img src="../imagenes/llave-removebg-preview.png" className="password"/>
                    <label for="contraseña" className="form-label" id="etiqueta1">Contraseña:</label>
                    <input type="text" className="form-control" id="contraseña"/>
                </div>
                <a href="bienvenida.html">
                    <button type="button" className="btn btn-success w-100">Iniciar sesión</button>
                </a>
                <div className="pregunta">
                    <label className="form-label">¿No tienes cuenta?</label>
                    <a href="crearcuenta.html" className="link">Registro aquí</a>
                </div>
            </form>
        </div>
    );
}

export default Login;