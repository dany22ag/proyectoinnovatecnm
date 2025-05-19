import '../App';
import {Link} from 'react-router-dom';

import React, { useState } from 'react';

function Crearcuenta() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    edad: '',
    usuario: '',
    contrasena: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!respuesta.ok) {
        throw new Error('Error al crear el usuario');
      }

      const data = await respuesta.json();
      console.log('Respuesta del servidor:', data);
      setMensaje('Usuario creado correctamente');

      setFormData({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        edad: '',
        usuario: '',
        contrasena: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Hubo un error al crear el usuario');
    }
  };

    return(
        <div className="registro">
            <h1 className="titulo2">CREAR CUENTA</h1>
            <form className="formularioRegistro" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputNombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="exampleInputNombre" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputApellido1" className="form-label">Apellido paterno:</label>
                    <input type="text" className="form-control" id="exampleInputApellido1" name="apellido_paterno" value={formData.apellido_paterno} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputApellido1" className="form-label">Apellido materno:</label>
                    <input type="text" className="form-control" id="exampleInputApellido1" name="apellido_materno" value={formData.apellido_materno} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEdad1" className="form-label">Edad:</label>
                    <input type="number" className="form-control" id="exampleInputEdad1" name="edad" value={formData.edad} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputUsuario1" className="form-label">Usuario:</label>
                    <input type="text" className="form-control" id="exampleInputUsuario1" name="usuario" value={formData.usuario} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputContraseña1" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="exampleInputContraseña1" name="contrasena" value={formData.contrasena} onChange={handleChange}/>
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
