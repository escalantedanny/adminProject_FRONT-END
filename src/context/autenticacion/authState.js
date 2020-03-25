import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESSION
} from '../../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje:null,
        cargando: true                                                              
    }

    const [ state, dispatch ] =  useReducer(AuthReducer, initialState);

    // funciones para la validacion del usuario ingreso a la platagorma
    const registrarUsuario = async datos => {

        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            //obtenemos usuario
            usuarioAutenticado();
        } catch (error) {

            const alerta = {
                msg : error.response.data.msg,
                categoria: 'alerta-error',
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token){
            // funcion para agregar token, por header
            tokenAuth(token);
        }
        
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
            
        } catch (error) {
            dispatch ({
                type: LOGIN_ERROR
            })
            
        }
    }

    // cuando el usuario inicia session
    const iniciarSession = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            //console.log(respuesta);
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    // cerrar la session del usuario activo
    const cerrarSession = () => {
        try {
            dispatch({
                type: CERRAR_SESSION
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <AuthContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            cargando: state.cargando,
            registrarUsuario,
            iniciarSession,
            usuarioAutenticado,
            cerrarSession
        }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;