import React, { Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTarea = () => {

    //obtener el estate del proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminaUnProyecto } = proyectosContext;

    //importar formulario del context
    const tareaContext = useContext(TareaContext);
    const { tareasProyecto } = tareaContext;

    // si no se a seleccionado ningun proyecto
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    // aplicacion array Destructuring  para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // elimina un proyecto
    const EliminarProyectoSeleccionado = () => {

        if (window.confirm(`Estas Seguro de eliminar ${proyectoActual.nombre}?`)) 
            eliminaUnProyecto(proyectoActual.id); 

    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                { tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas Asignadas</p></li>) 
                    : 
                    <TransitionGroup>   
                        {
                            tareasProyecto.map(tarea => (
                                <CSSTransition key={tarea.id} timeout={200} classNames="tarea"><Tarea tarea={tarea} /></CSSTransition>
                            ))
                        }
                    </TransitionGroup> 
                }
            </ul>

            <button type="button" className="btn btn-eliminar" onClick={EliminarProyectoSeleccionado} >
                Eliminar Proyecto
            </button>
        </Fragment>
     );
}
 
export default ListadoTarea;