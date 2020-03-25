import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext'

const Login = (props) => {

    //extraer los valores del conext de alerta
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta} = alertaContext;

    //extraer los valores del conext de autenticacion
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSession } = authContext;
    
    // useEffect va a esatr a la escucha de cualqueir cambio en nuestra aplicacion
    useEffect(() => {
        if(autenticado)
            props.history.push('/proyectos');
        if(mensaje){
            mostrarAlerta(mensaje.msg , mensaje.categoria);
            return;
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const verificar = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const validarUsuario = e => {
        e.preventDefault();

        // validar que no tenga campos vacios
        if(email.trim() === '' || password.trim() === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        if(password.length < 6 ){
            mostrarAlerta('El password debe tener minimo 6 caracteres', 'alerta-error');
            return;
        }

        iniciarSession({email, password});
    }

        return ( 
            <div className="form-usuario">
                { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
                <div className="contenedor-form sombra-dark">
                    <h1>Iniciar Sesión</h1>

                    <form onSubmit={validarUsuario} >
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
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                name="iniciar"
                                id="iniciar"
                                value="Iniciar Sessión"
                            />
                        </div>
                    </form>
                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Registrarme
                    </Link>
                </div>
            </div>
        );
    }
 
export default Login;