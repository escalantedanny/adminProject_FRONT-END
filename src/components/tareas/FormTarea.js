import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {
    
    
    //obtener si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    //importar formulario del context
    const { proyecto } = proyectosContext;

    //obtenemos context de tareas
    const tareasContext = useContext(TareaContext);
    //importar las tareas del formulario
    const { tareaSeleccionada, errorTarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea } = tareasContext;

    // para cambiar en el tiempo de ejecucion la manipulacion
    // que detecta si  es una tarea seleccionada
    useEffect(() => {
        if(tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada)
        } else {
            guardarTarea({
                nombre : '',
            });
        }
    }, [tareaSeleccionada])

    // agregamos state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // extraemos el nombre del proyecto
    const { nombre } = tarea;

    // si no se a seleccionado ningun proyecto
    if(!proyecto) return null;

    // aplicacion array Destructuring  para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
     
    const onSubmit = e => {
       e.preventDefault();

        // validar input del formulario para agregar una tarea
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        // revizamos si existe agregar o editar
        if(tareaSeleccionada === null) {
            // agregar nueva tarea al state de tarea
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            actualizarTarea(tarea);
        }


        // obtenemos la tarea y filtrarlas
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        guardarTarea({
            nombre : '',
        });


    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre tarea" name="nombre" onChange={handleChange} value={nombre} />
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-block" value={ tareaSeleccionada ? 'Editar Tarea' : 'Guardar Tarea' } />
                </div>
            </form>
            { errorTarea ? <p className="mensaje error">El nombre de la Tarea es Obligatorio</p> :  null }
        </div>
     );
}
 
export default FormTarea;