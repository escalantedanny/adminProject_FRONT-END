import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //obtener el estate del formulario
    const proyectosContext = useContext(proyectoContext);

    //importar formulario del context
    const { formulario, errorformulario, mostrarFormulario, esconderFormulario, agregarProyecto, mostrarError } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre : ''
    }); 

    //destructuring
    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }
 
    const crearProyecto = () => {
        mostrarFormulario();
    }

    const esconder = () => {
        esconderFormulario();
    }

    // Cuando el usuario envia el proyecto
    const sendProyecto = e => {
        e.preventDefault();

        //validar proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        // agregamos el proyecto al listado
        agregarProyecto(proyecto);

        //reiniciamos el form
        guardarProyecto({
            nombre: ''
        })

    }

    return ( 
        <Fragment>
            <button 
            value="button"
            className="btn btn-primario"
            onClick={crearProyecto}
            onDoubleClick={esconder}
            title="Agrega un Proyecto Nuevo"
            ><span className="material-icons">
            gamepad
            </span> &nbsp;<span>Nuevo Proyecto</span></button>

            {   formulario ? 
                    (
                        <form className="formulario-nuevo-proyecto" onSubmit={sendProyecto}>
                            <input type="text" className="input-text" placeholder="Nombre del Proyecto" name="nombre" value={nombre} onChange={onChangeProyecto}/>
                            <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto"/>
                        </form>
                    ) : null }
            { errorformulario 
                ?  (<p className="mensaje error">El Nombre del Proyecto debe ser Obligatorio</p>)
                : null }

        </Fragment>
     );
}
 
export default NuevoProyecto;