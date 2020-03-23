import React from 'react';
//elementos necesarios para habilitar router en nuestro proyecto
//BrowserRouter as Router, Switch, Route
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/rutasPrivadas';

const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}


function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  

  return (
      <ProyectoState>
        <AlertaState>
          <TareaState>
            <AuthState>
              <Router>
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                    <RutaPrivada exact path="/proyectos" component={Proyectos} />
                  </Switch>
                </Router>
            </AuthState>
          </TareaState>
        </AlertaState>
      </ProyectoState>

  );
}

export default App;
