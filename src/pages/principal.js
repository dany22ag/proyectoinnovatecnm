import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import maiz from '../imagenes/maiz2-removebg-preview.png';
import '../App';

function Principal(){
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

return(
    <div className="App">
      <img src={maiz} className="App-icono" alt="icono"/>
        <p class="title">
          CUAYICENTLI
        </p>
    </div>
    );
}

export default Principal;

