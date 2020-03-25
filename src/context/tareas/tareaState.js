import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import TareaAxios from '../../config/axios';
// import uuid from 'uuid'; se utiliza para agregar ID a los registros de manera automatica

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ERROR,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

const TareaState = props => {

    const initialState = {
        tareasProyecto: [],
        errorTarea: false,
        tareaSeleccionada: null,
        mensaje: null
    }

    // crear dispatch y state 
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // obtener tareas de un prohjecto
    const obtenerTareas = async proyecto => {
        
        try {
            const respuesta = await TareaAxios.get('/api/tareas', { params: {proyecto}});
            
            dispatch({
                type: TAREAS_PROYECTO,
                payload: respuesta.data.tareas
            });
        } catch (error) {
            const alerta = {
                msg: "Hubo un error al obtener las tareas",
                categoria: "alerta-error"
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            })
        }
    }

    // agregamos una tarea al proyecto seleccionado
    const agregarTarea = async tarea => {
        // tarea.id = uuid.v4(); se utiliza para agregar ID a los registros de manera automatica
        try {
            await TareaAxios.post('/api/tareas', tarea);
            
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            });
        } catch (error) {
            const alerta = {
                msg: "Hubo un error",
                categoria: "alerta-error al agregar la tarea"
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            })
        }
    }

    // valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    }
    
    const eliminarTarea = async (id, proyecto) => {
        try {
            await TareaAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            });
        } catch (error) {
            const alerta = {
                msg: "Hubo un error al eliminar la tarea",
                categoria: "alerta-error"
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            })
        }
    }

    const actualizarTarea = async tarea => {
        try {
            const resultado = await TareaAxios.put(`/api/tareas/${tarea._id}`, tarea);
            
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            });
        } catch (error) {
            const alerta = {
                msg: "Hubo un error al actualizar la tarea",
                categoria: "alerta-error"
            }
            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            })
        }
    }

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea, 
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );

}

export default TareaState;
