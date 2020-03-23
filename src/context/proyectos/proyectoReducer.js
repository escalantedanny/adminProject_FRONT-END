import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTO, 
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
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
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload) // filtramos por el proyecto seleccionado
            }
        case ELIMINAR_PROYECTO:
            return {
                ...state, 
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload), // filtramos por el proyecto seleccionado para eliminarlo  
                proyecto : null               
            }
        default: 
            return state;

    }

}