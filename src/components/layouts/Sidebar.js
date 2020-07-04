import React from 'react';
import {Link} from 'react-router-dom';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';


const Sidebar = () => {
    return (
        <aside>
            <Link to={'/proyectos'}>
                <h1>Ticket <span>soft</span></h1>
            </Link>
            <div><hr></hr></div>
            
            <NuevoProyecto/>

            <div className="proyectos">
            <Link to={'/proyectos'}>
                    <h3 align="center">
                        <u>Listado de Aplicaciones</u>
                    </h3>
            </Link>
                <ListadoProyectos/>
            </div>
        </aside>
    );
}
export default Sidebar;