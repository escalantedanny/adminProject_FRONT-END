import React, { useReducer } from 'react';
import ProyectoAxios from '../../config/axios';
 // import uuid from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
            FORMULARIO_PROYECTO, 
            OBTENER_PROYECTOS, 
            AGREGAR_PROYECTO, 
            VALIDAR_FORMULARIO,
            PROYECTO_ACTUAL,
            ELIMINAR_PROYECTO,
            PROYECTO_ERROR 
        } from '../../types';

const ProyectoState = props => {

    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario : false,
        proyecto: null,
        mensaje: null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos  con dispatch
    const obtenerProyectos = async () => {
        try {
            const resultado = await ProyectoAxios.get('/api/proyectos');

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            const alerta = {
                msg: "Hubo un error",
                categoria: "alerta-error"
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }

    }

    // agregamos nuevo proyecto al aside
    const agregarProyecto = async proyecto => {

        // funcion NECESARIA cuando elmanejador no tiene in ID proyecto.id = uuid.v4();
        try {
            const respuesta = await ProyectoAxios.post('/api/proyectos', proyecto);
            
            //insertar proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: respuesta.data
            });
        } catch (error) {
            const alerta = {
                msg: "Hubo un error",
                categoria: "alerta-error"
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }

    }

    //valida el formulario para que sea vacio
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //SELECCIONA EL PROYECTO QUE EL USUARIO LE DIO CLICK
    const mostrarProyecto = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    }

    //ELIMINA EL PROYECTO QUE EL USUARIO LE DIO CLICK
    const eliminaUnProyecto = async proyectoId => {

        try {
            await ProyectoAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            });
        } catch (error) {
            const alerta = {
                msg: "Hubo un error",
                categoria: "alerta-error"
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
        

        
    }
    return (
        <proyectoContext.Provider 
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario, 
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                mostrarProyecto,
                eliminaUnProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;