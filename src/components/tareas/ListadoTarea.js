import React, { Fragment, useContext, useEffect} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AlertContext from '../../context/alertas/alertaContext';

const ListadoTarea = () => {

    //obtener el estate del proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminaUnProyecto } = proyectosContext;

    //importar formulario del context
    const tareaContext = useContext(TareaContext);
    const { mensaje, tareasProyecto } = tareaContext;

    //Extraer alertas de state inicial
    const alertContext = useContext(AlertContext);
    //importar alertas del context
    const { alerta, mostrarAlerta } = alertContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {
        //si existe un error
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje]); 

    // si no se a seleccionado ningun proyecto
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    // aplicacion array Destructuring  para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // elimina un proyecto
    const EliminarProyectoSeleccionado = () => {

        if (window.confirm(`Estas Seguro de eliminar ${proyectoActual.nombre}?`)) 
            eliminaUnProyecto(proyectoActual._id); 

    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                { alerta ? ( <div className={`alerta ${mensaje.categoria}`}>{mensaje.msg}</div> ) : null}
                { tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas Asignadas</p></li>) 
                    : 
                    <TransitionGroup>   
                        {
                            tareasProyecto.map(tarea => (
                                <CSSTransition key={tarea._id} timeout={200} classNames="tarea"><Tarea tarea={tarea} /></CSSTransition>
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