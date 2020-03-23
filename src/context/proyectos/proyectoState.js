import React, { useReducer } from 'react';

import uuid from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
            FORMULARIO_PROYECTO, 
            OBTENER_PROYECTOS, 
            AGREGAR_PROYECTO, 
            VALIDAR_FORMULARIO,
            PROYECTO_ACTUAL,
            ELIMINAR_PROYECTO 
        } from '../../types';

const ProyectoState = props => {

    const proyectos = [
        { id:1, nombre: 'Tienda Virtual' },
        { id:2, nombre: 'Academia de Desarrollo' },
        { id:3, nombre: 'Diseño de Sitios Web' },
        { id:4, nombre: 'Venta de Hosting' },
        { id:5, nombre: 'Intranet' }
    ];

    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario : false,
        proyecto: null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos  con dispatch
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // agregamos nuevo proyecto al aside
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();

        //insertar proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
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
    const eliminaUnProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        });
    }
    return (
        <proyectoContext.Provider 
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario, 
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
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