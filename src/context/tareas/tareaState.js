import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import uuid from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

const TareaState = props => {

    const initialState = {
        tareas : [
            {id: 1, nombre: 'Elegir vender', estado: true, proyectoId: 1},
            {id: 2, nombre: 'Elegir Comprar', estado: false, proyectoId: 2},
            {id: 3, nombre: 'Elegir Arrendar', estado: true, proyectoId: 3},
            {id: 4, nombre: 'Elegir Varios en medulo de trabajador', estado: false, proyectoId: 4},
            {id: 5, nombre: 'Elegir Hosting falso', estado: false, proyectoId: 1},
            {id: 6, nombre: 'Elegir Dominio', estado: false, proyectoId: 2},
            {id: 7, nombre: 'Elegir Maquina Virtual', estado: true, proyectoId: 3},
            {id: 8, nombre: 'Elegir Equipos de primera Necesidad', estado: false, proyectoId: 2},
            {id: 9, nombre: 'Elegir Maquinas de contingencia', estado: true, proyectoId: 3},
            {id: 10, nombre: 'Elegir Productos en venta', estado: false, proyectoId: 4},
            {id: 11, nombre: 'Elegir Asignacion automatica', estado: true, proyectoId: 1},
        ],
        tareasProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null,
    }

    // crear dispatch y state 
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // obtener tareas de un prohjecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    }

    // agregamos una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid.v4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    }

    // valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    }
    
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    }

    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload:tarea
        });
    }

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea, 
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );

}

export default TareaState;
