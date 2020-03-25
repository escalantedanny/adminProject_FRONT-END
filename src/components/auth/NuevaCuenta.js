import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AlertaConext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext'

const NuevaCuenta = (props) => {

    //extraer los valores del conext de alerta
    const alertaContext = useContext(AlertaConext);
    const { alerta, mostrarAlerta} = alertaContext;

    //extraer los valores del conext de autenticacion
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // useEffect va a esatr a la escucha de cualqueir cambio en nuestra aplicacion
    useEffect(() => {

        if(autenticado) {
            mostrarAlerta('Registrado Correctamente' , 'alerta-ok');
            setTimeout(() => {
                props.history.push('/'); 
                //props.history.push('/proyectos'); // indicamos a donde queremos ir despues de autenticar
            }, 2000);
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg , mensaje.categoria);
            return;
        }
    }, [mensaje, autenticado, props.history]);

    const [usuario, guardarUsuario] = useState({
        nombre : '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const verificar = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const validarUsuario = e => {
        e.preventDefault();
        
        // validar que no tenga campos vacios
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        if(password.length < 6 || confirmar.length < 6){
            mostrarAlerta('El password debe tener minimo 6 caracteres', 'alerta-error');
            return;
        }
        if(password !== confirmar ){
            mostrarAlerta('La contraseña y la confirmacion deben ser iguales', 'alerta-error');
            return;
        }

        //pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password 
        });

    }

        return ( 
            <div className="form-usuario">
            { (alerta)? <div className= {`alerta ${alerta.categoria}`}>{ alerta.msg }</div>: null }
                <div className="contenedor-form sombra-dark">
                    <h1>Registro de Usuario</h1>

                    <form onSubmit={validarUsuario} >
                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                placeholder="Tu Nombre"
                                onChange={verificar}
                            />
                        </div>                       
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Tu Email"
                                onChange={verificar}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Tu Password"
                                onChange={verificar}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="confirmar">Repetir Password</label>
                            <input
                                type="password"
                                id="confirmar"
                                name="confirmar"
                                value={confirmar}
                                placeholder="Repetir Password"
                                onChange={verificar}
                            />
                        </div>

                        <div className="campo-form">
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                name="iniciar"
                                id="iniciar"
                                value="Registrarme"
                            />
                        </div>
                    </form>
                    <Link to={'/'} className="enlace-cuenta">
                        Volver a Iniciar Sessión
                    </Link>
                </div>
            </div>
        );
    }
 
export default NuevaCuenta;