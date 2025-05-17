import '../App';
import {Link} from 'react-router-dom';

function Bienvenida(){
    return (
    <div>
        <div className="container">
            <div className="menutoggle" id="togglemenu">
                <img src="../imagenes/menu.png" alt="Menú"/> 
            </div>
            <div className="sidebar" id="sidebar">
                <div className="perfil">
                    <img src="../imagenes/USUARIO-removebg-preview.png" className="perfil mt-2"/>
                    <a href="perfil.html" className="link d-block mt-2">Daniela Guadalupe Aguilar Aguilar</a>
                </div>
                <div className="menulateral">
                    <Link to="/miscultivos">
                        <button type="button" className="btn btn-success w-100" id="etiqueta">Mis cultivos</button>
                    </Link>
                    <Link to="/configuracion">
                        <img src="../imagenes/configuracion-removebg-preview.png" className="icono engrane"/>
                    </Link>
                    <Link to="/login">
                        <img src="../imagenes/log_out-removebg-preview.png" className="icono cerrar_sesion"/>
                    </Link>
                </div>
            </div>
            <div className="bienvenida">
                <h2 className="letrero">¡Bienvenid@ Daniela!</h2>
                <Link to="/monitoreo">
                    <img src="../imagenes/monitoreo.jpg" className="monitoreo"/>
                </Link>
                <label for="monitoreo" className="form-label" id="etiquetamonitoreo">Monitoreo</label>
                <Link to="/analisis" className="link">
                    <img src="../imagenes/analisis datos.jpg" className="analisis"/>
                </Link>
                <label for="analisis" className="form-label" id="etiquetanalisis">Análisis</label>
            </div>
        </div>
    </div>
    );
}

export default Bienvenida;
