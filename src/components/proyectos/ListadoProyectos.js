import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AlertContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    //importar formulario del context
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

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
        obtenerProyectos();
    }, [mensaje]); // se pasa mensaje como dependencia para que quede escuchando si existe o no mensaje

    // revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <h2>No Tienes Proyectos</h2>;

    return ( 
        <ul className="listado-proyectos">
            { alerta ? ( <div className={`alerta ${mensaje.categoria}`}>{mensaje.msg}</div> ) : null}
            <TransitionGroup> 
                {proyectos.map( proyecto => (
                    <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
                        <Proyecto 
                            proyecto={proyecto} 
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup> 
            
        </ul>
     );
}
 
export default ListadoProyectos;