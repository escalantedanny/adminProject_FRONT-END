import React from 'react';
import {Link} from 'react-router-dom';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return (
        <aside>
            <Link to={'/proyectos'}>
                <h1>TICKET <span>soft</span></h1>
            </Link>
            <div><hr></hr></div>
            
            <NuevoProyecto/>

            <div className="proyectos">
            <Link to={'/proyectos'}>
                    <h1>Listado de Aplicaciones</h1>
            </Link>
                <ListadoProyectos/>
            </div>
        </aside>
    );
}
export default Sidebar;