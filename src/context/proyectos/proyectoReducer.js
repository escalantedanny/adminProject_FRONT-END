import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTO,
    PROYECTO_ERROR, 
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    OCULTAR_ACTUAL,
    MOSTRAR_TODOS_PROYECTOS
} from '../../types';

export default (state, action) => {
    
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload // obtenemos el proyecto seleccionado
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload], // agregamos el proyecto completo al hacer click en el componente
                formulario: false,
                errorformulario : false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario : true 
            }
        case PROYECTO_ACTUAL:
            return {
                ...state, 
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload) // filtramos por el proyecto seleccionado
            }
        case ELIMINAR_PROYECTO:
            return {
                ...state, 
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload), // filtramos por el proyecto seleccionado para eliminarlo  
                proyecto : null               
            }
        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case OCULTAR_ACTUAL:
            return {
                ...state,
                formulario: false
            }
        case MOSTRAR_TODOS_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        default: 
            return state;

    }

}