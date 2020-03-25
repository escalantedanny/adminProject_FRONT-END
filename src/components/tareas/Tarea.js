import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    //obtenemos context de tareas
    const tareasContext = useContext(TareaContext);
    //importar las tareas del formulario
    const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = tareasContext;

    //obtener si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    //importar formulario del context
    const { proyecto } = proyectosContext;

    // aplicacion array Destructuring  para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const deleteTarea = id => {
        if (window.confirm(`Estas Seguro de eliminar ${tarea.nombre}?`)) {
            eliminarTarea(id, proyectoActual._id);
            obtenerTareas(proyectoActual.id);
        }
    }

    const cambiarEstado = tarea => {
        
        if(tarea.estatus){
            tarea.estatus = false;
        } else {
            tarea.estatus = true;
        }
        
        actualizarTarea(tarea);
    }

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estatus
                    ? <button type="button" className="completo" onClick={() => cambiarEstado(tarea)}>Completo</button>
                    : <button type="button" className="incompleto" onClick={() => cambiarEstado(tarea)}>Incompleto</button>
                }
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario" onClick={ () => seleccionarTarea(tarea)}>Editar</button>
                <button type="button" className="btn btn-secundario" onClick={ () => deleteTarea(tarea._id) } >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;