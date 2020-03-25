import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

    //extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSession, cargando } = authContext;

    useEffect( () => {
        usuarioAutenticado();
    }, [])

    const cerrarSesion = () => {
        cerrarSession();
    }

    return ( 
        <header className="app-header">
            { usuario && !cargando ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : '' }

            <nav className="nav-principal">
                <button className="btn btn-blank cerrar-sesion" onClick={cerrarSesion}>
                    Cerrar Sessión
                </button>
            </nav>
        </header>
     );
}
 
export default Barra;