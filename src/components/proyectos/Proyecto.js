import React, {useContext, Fragment} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //obtener el estate del proyecto
    const proyectosContext = useContext(proyectoContext);
    const { mostrarProyecto } = proyectosContext;

    //importar formulario del context
    const tareaContext = useContext(TareaContext);
    const { obtenerTareas } = tareaContext;

    // funcion para agregar proyecto actual
    const seleccionarProyecto = id => {
        mostrarProyecto(id);
        obtenerTareas(id);
    }

    return ( 
        <Fragment>
            <li>
                <button
                type="button"
                className="btn btn-blank"
                onClick={ () => seleccionarProyecto(proyecto._id)}
                ><i className="material-icons">desktop_windows</i>&nbsp;&nbsp;{proyecto.nombre}
                </button>
            </li>
        </Fragment>    
     );
}
 
export default Proyecto;