(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{37:function(e,a,t){e.exports=t(66)},42:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(16),c=t.n(o),l=(t(42),t(12)),s=t(14),u=t(11),i=t(1),m=t(4),p=Object(r.createContext)(),d=Object(r.createContext)(),b=function(e){var a=Object(r.useContext)(p),t=a.alerta,o=a.mostrarAlerta,c=Object(r.useContext)(d),s=c.mensaje,b=c.autenticado,E=c.iniciarSession;Object(r.useEffect)((function(){b&&e.history.push("/proyectos"),s&&o(s.msg,s.categoria)}),[s,b,e.history]);var f=Object(r.useState)({email:"",password:""}),O=Object(m.a)(f,2),y=O[0],R=O[1],v=y.email,g=y.password,A=function(e){R(Object(i.a)({},y,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-usuario"},t?n.a.createElement("div",{className:"alerta ".concat(t.categoria)}," ",t.msg," "):null,n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Iniciar Sesi\xf3n"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==v.trim()&&""!==g.trim()?g.length<6?o("El password debe tener minimo 6 caracteres","alerta-error"):E({email:v,password:g}):o("Todos los campos son obligatorios","alerta-error")}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",value:v,placeholder:"Tu Email",onChange:A})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",value:g,placeholder:"Tu Password",onChange:A})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",name:"iniciar",id:"iniciar",value:"Iniciar Sessi\xf3n"}))),n.a.createElement(l.b,{to:"/nueva-cuenta",className:"enlace-cuenta"},"Registrarme")))},E=function(e){var a=Object(r.useContext)(p),t=a.alerta,o=a.mostrarAlerta,c=Object(r.useContext)(d),s=c.mensaje,b=c.autenticado,E=c.registrarUsuario;Object(r.useEffect)((function(){b&&(o("Registrado Correctamente","alerta-ok"),setTimeout((function(){e.history.push("/")}),2e3)),s&&o(s.msg,s.categoria)}),[s,b,e.history]);var f=Object(r.useState)({nombre:"",email:"",password:"",confirmar:""}),O=Object(m.a)(f,2),y=O[0],R=O[1],v=y.nombre,g=y.email,A=y.password,j=y.confirmar,h=function(e){R(Object(i.a)({},y,Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-usuario"},t?n.a.createElement("div",{className:"alerta ".concat(t.categoria)},t.msg):null,n.a.createElement("div",{className:"contenedor-form sombra-dark"},n.a.createElement("h1",null,"Registro de Usuario"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==v.trim()&&""!==g.trim()&&""!==A.trim()&&""!==j.trim()?A.length<6||j.length<6?o("El password debe tener minimo 6 caracteres","alerta-error"):A===j?E({nombre:v,email:g,password:A}):o("La contrase\xf1a y la confirmacion deben ser iguales","alerta-error"):o("Todos los campos son obligatorios","alerta-error")}},n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"nombre"},"Nombre"),n.a.createElement("input",{type:"text",id:"nombre",name:"nombre",value:v,placeholder:"Tu Nombre",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",value:g,placeholder:"Tu Email",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",name:"password",value:A,placeholder:"Tu Password",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("label",{htmlFor:"confirmar"},"Repetir Password"),n.a.createElement("input",{type:"password",id:"confirmar",name:"confirmar",value:j,placeholder:"Repetir Password",onChange:h})),n.a.createElement("div",{className:"campo-form"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",name:"iniciar",id:"iniciar",value:"Registrarme"}))),n.a.createElement(l.b,{to:"/",className:"enlace-cuenta"},"Volver a Iniciar Sessi\xf3n")))},f=Object(r.createContext)(),O=function(){var e=Object(r.useContext)(f),a=e.formulario,t=e.errorformulario,o=e.mostrarFormulario,c=e.esconderFormulario,l=e.agregarProyecto,s=e.mostrarError,p=Object(r.useState)({nombre:""}),d=Object(m.a)(p,2),b=d[0],E=d[1],O=b.nombre;return n.a.createElement(r.Fragment,null,n.a.createElement("button",{value:"button",className:"btn btn-primario",onClick:function(){o()},onDoubleClick:function(){c()},title:"Agrega un Proyecto Nuevo"},n.a.createElement("span",{className:"material-icons"},"gamepad")," \xa0",n.a.createElement("span",null,"Nuevo Proyecto")),a?n.a.createElement("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==O?(l(b),E({nombre:""})):s()}},n.a.createElement("input",{type:"text",className:"input-text",placeholder:"Nombre del Proyecto",name:"nombre",value:O,onChange:function(e){E(Object(i.a)({},b,Object(u.a)({},e.target.name,e.target.value)))}}),n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar Proyecto"})):null,t?n.a.createElement("p",{className:"mensaje error"},"El Nombre del Proyecto debe ser Obligatorio"):null)},y=Object(r.createContext)(),R=function(e){var a=e.proyecto,t=Object(r.useContext)(f).mostrarProyecto,o=Object(r.useContext)(y).obtenerTareas;return n.a.createElement(r.Fragment,null,n.a.createElement("li",null,n.a.createElement("button",{type:"button",className:"btn btn-blank",onClick:function(){return e=a._id,t(e),void o(e);var e}},n.a.createElement("i",{className:"material-icons"},"desktop_windows"),"\xa0\xa0",a.nombre)))},v=t(68),g=t(67),A=function(){var e=Object(r.useContext)(f),a=e.mensaje,t=e.proyectos,o=e.obtenerProyectos,c=e.obtenerProyectosAdmin,l=Object(r.useContext)(p),s=l.alerta,u=l.mostrarAlerta,i=Object(r.useContext)(d).usuario;return Object(r.useEffect)((function(){a&&u(a.msg,a.categoria),i&&2===i.rol?o():c()}),[a]),0===t.length?n.a.createElement("h2",null,"No Tienes Proyectos"):n.a.createElement("ul",{className:"listado-proyectos"},s?n.a.createElement("div",{className:"alerta ".concat(a.categoria)},a.msg):null,n.a.createElement(v.a,null,t.map((function(e){return n.a.createElement(g.a,{key:e._id,timeout:200,classNames:"proyecto"},n.a.createElement(R,{proyecto:e}))}))))},j=function(){return n.a.createElement("aside",null,n.a.createElement(l.b,{to:"/proyectos"},n.a.createElement("h1",null,"Ticket ",n.a.createElement("span",null,"soft"))),n.a.createElement("div",null,n.a.createElement("hr",null)),n.a.createElement(O,null),n.a.createElement("div",{className:"proyectos"},n.a.createElement(l.b,{to:"/proyectos"},n.a.createElement("h3",{align:"center"},n.a.createElement("u",null,"Listado de Aplicaciones"))),n.a.createElement(A,null)))},h=function(){var e=Object(r.useContext)(d),a=e.usuario,t=e.usuarioAutenticado,o=e.cerrarSession,c=e.cargando;Object(r.useEffect)((function(){t()}),[]);return n.a.createElement("header",{className:"app-header"},a&&!c?n.a.createElement("p",{className:"nombre-usuario"},"Hola ",n.a.createElement("span",null,a.nombre)):"",n.a.createElement("br",null),n.a.createElement("nav",{className:"nav-principal"},n.a.createElement("button",{className:"btn btn-blank cerrar-sesion",onClick:function(){o()}},"Cerrar Sessi\xf3n")))},T=function(){var e=Object(r.useContext)(f).proyecto,a=Object(r.useContext)(y),t=a.tareaSeleccionada,o=a.errorTarea,c=a.agregarTarea,l=a.validarTarea,s=a.obtenerTareas,p=a.actualizarTarea;Object(r.useEffect)((function(){O(null!==t?t:{nombre:""})}),[t]);var d=Object(r.useState)({nombre:""}),b=Object(m.a)(d,2),E=b[0],O=b[1],R=E.nombre;if(!e)return null;var v=Object(m.a)(e,1)[0];return n.a.createElement("div",{className:"formulario"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==R.trim()?(null===t?(E.proyecto=v._id,c(E)):p(E),s(v.id),O({nombre:""})):l()}},n.a.createElement("div",{className:"contenedor-input"},n.a.createElement("input",{type:"text",className:"input-text",placeholder:"Nombre tarea",name:"nombre",onChange:function(e){O(Object(i.a)({},E,Object(u.a)({},e.target.name,e.target.value)))},value:R})),n.a.createElement("div",{className:"contenedor-input"},n.a.createElement("input",{type:"submit",className:"btn btn-primario btn-block",value:t?"Editar Tarea":"Guardar Tarea"}))),o?n.a.createElement("p",{className:"mensaje error"},"El nombre de la Tarea es Obligatorio"):null)},N=function(e){var a=e.tarea,t=Object(r.useContext)(y),o=t.eliminarTarea,c=t.obtenerTareas,l=t.actualizarTarea,s=t.guardarTareaActual,u=Object(r.useContext)(f).proyecto,i=Object(m.a)(u,1)[0],p=function(e){e.estatus?e.estatus=!1:e.estatus=!0,l(e)};return n.a.createElement("li",{className:"tarea sombra"},n.a.createElement("p",null,a.nombre),n.a.createElement("div",{className:"estado"},a.estatus?n.a.createElement("button",{type:"button",className:"completo",onClick:function(){return p(a)}},"Completo"):n.a.createElement("button",{type:"button",className:"incompleto",onClick:function(){return p(a)}},"Incompleto")),n.a.createElement("div",{className:"acciones"},n.a.createElement("button",{type:"button",className:"btn btn-primario",onClick:function(){return function(e){s(e)}(a)}},"Editar"),n.a.createElement("button",{type:"button",className:"btn btn-secundario",onClick:function(){return e=a._id,void(window.confirm("Estas Seguro de eliminar ".concat(a.nombre,"?"))&&(o(e,i._id),c(i.id)));var e}},"Eliminar")))},C=function(){var e=Object(r.useContext)(f),a=e.proyecto,t=e.eliminaUnProyecto,o=Object(r.useContext)(y),c=o.mensaje,l=o.tareasProyecto,s=Object(r.useContext)(p),u=s.alerta,i=s.mostrarAlerta;if(Object(r.useEffect)((function(){c&&i(c.msg,c.categoria)}),[c]),!a)return n.a.createElement("h2",null,"Selecciona un Proyecto");var d=Object(m.a)(a,1)[0];return n.a.createElement(r.Fragment,null,n.a.createElement("h2",null,"Proyecto: ",d.nombre),n.a.createElement("ul",{className:"listado-tareas"},u?n.a.createElement("div",{className:"alerta ".concat(c.categoria)},c.msg):null,0===l.length?n.a.createElement("li",{className:"tarea"},n.a.createElement("p",null,"No hay tareas Asignadas")):n.a.createElement(v.a,null,l.map((function(e){return n.a.createElement(g.a,{key:e._id,timeout:200,classNames:"tarea"},n.a.createElement(N,{tarea:e}))})))),n.a.createElement("button",{type:"button",className:"btn btn-eliminar",onClick:function(){window.confirm("Estas Seguro de eliminar ".concat(d.nombre,"?"))&&t(d._id)}},"Eliminar Proyecto"))},_=function(){var e=Object(r.useContext)(d).usuarioAutenticado;return Object(r.useEffect)((function(){e()}),[]),n.a.createElement("div",{className:"contenedor-app"},n.a.createElement(j,null),n.a.createElement("div",{className:"seccion-principal"},n.a.createElement(h,null),n.a.createElement("main",null,n.a.createElement(T,null),n.a.createElement("div",{className:"contenedor-tareas"},n.a.createElement(C,null)))))},k=t(2),x=t.n(k),w=t(6),P=t(33),S=t.n(P).a.create({baseURL:"http://localhost:4000/"}),I=t(17),L=function(e,a){switch(a.type){case"FORMULARIO_PROYECTO":return Object(i.a)({},e,{formulario:!0});case"OBTENER_PROYECTOS":return Object(i.a)({},e,{proyectos:a.payload});case"AGREGAR_PROYECTO":return Object(i.a)({},e,{proyectos:[].concat(Object(I.a)(e.proyectos),[a.payload]),formulario:!1,errorformulario:!1});case"VALIDAR_FORMULARIO":return Object(i.a)({},e,{errorformulario:!0});case"PROYECTO_ACTUAL":return Object(i.a)({},e,{proyecto:e.proyectos.filter((function(e){return e._id===a.payload}))});case"ELIMINAR_PROYECTO":return Object(i.a)({},e,{proyectos:e.proyectos.filter((function(e){return e._id!==a.payload})),proyecto:null});case"PROYECTO_ERROR":return Object(i.a)({},e,{mensaje:a.payload});case"OCULTAR_ACTUAL":return Object(i.a)({},e,{formulario:!1});case"MOSTRAR_TODOS_PROYECTOS":return Object(i.a)({},e,{proyectos:a.payload});default:return e}},U=function(e){var a=Object(r.useReducer)(L,{proyectos:[],formulario:!1,errorformulario:!1,proyecto:null,mensaje:null}),t=Object(m.a)(a,2),o=t[0],c=t[1],l=function(){var e=Object(w.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/api/tikets/proyectos");case 3:a=e.sent,c({type:"OBTENER_PROYECTOS",payload:a.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"PROYECTO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(w.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/api/tikets/proyectos",a);case 3:t=e.sent,c({type:"AGREGAR_PROYECTO",payload:t.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"PROYECTO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(w.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.delete("/api/tikets/proyectos/".concat(a));case 3:c({type:"ELIMINAR_PROYECTO",payload:a}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c({type:"PROYECTO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),i=function(){var e=Object(w.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/api/tikets/proyectos/");case 3:a=e.sent,c({type:"MOSTRAR_TODOS_PROYECTOS",payload:a.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"PROYECTO_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(f.Provider,{value:{proyectos:o.proyectos,formulario:o.formulario,errorformulario:o.errorformulario,proyecto:o.proyecto,mensaje:o.mensaje,mostrarFormulario:function(){c({type:"FORMULARIO_PROYECTO"})},obtenerProyectos:l,agregarProyecto:s,mostrarError:function(){c({type:"VALIDAR_FORMULARIO"})},mostrarProyecto:function(e){c({type:"PROYECTO_ACTUAL",payload:e})},eliminaUnProyecto:u,esconderFormulario:function(){c({type:"OCULTAR_ACTUAL"})},obtenerProyectosAdmin:i}},e.children)},G=function(e,a){switch(a.type){case"TAREAS_PROYECTO":return Object(i.a)({},e,{tareasProyecto:a.payload});case"AGREGAR_TAREA":return Object(i.a)({},e,{tareasProyecto:[a.payload].concat(Object(I.a)(e.tareasProyecto)),errorTarea:!1});case"VALIDAR_TAREA":return Object(i.a)({},e,{errorTarea:!0});case"ELIMINAR_TAREA":return Object(i.a)({},e,{tareasProyecto:e.tareasProyecto.filter((function(e){return e._id!==a.payload}))});case"ACTUALIZAR_TAREA":return Object(i.a)({},e,{tareasProyecto:e.tareasProyecto.map((function(e){return e._id===a.payload._id?a.payload:e})),tareaSeleccionada:null});case"TAREA_ACTUAL":return Object(i.a)({},e,{tareaSeleccionada:a.payload});case"TAREA_ERROR":return Object(i.a)({},e,{mensaje:a.payload});default:return e}},Y=function(e){var a=Object(r.useReducer)(G,{tareasProyecto:[],errorTarea:!1,tareaSeleccionada:null,mensaje:null}),t=Object(m.a)(a,2),o=t[0],c=t[1],l=function(){var e=Object(w.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/api/tikets/tareas",{params:{proyecto:a}});case 3:t=e.sent,c({type:"TAREAS_PROYECTO",payload:t.data.tareas}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"TAREA_ERROR",payload:{msg:"Hubo un error al obtener las tareas",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),s=function(){var e=Object(w.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/api/tikets/tareas",a);case 3:c({type:"AGREGAR_TAREA",payload:a}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c({type:"TAREA_ERROR",payload:{msg:"Hubo un error",categoria:"alerta-error al agregar la tarea"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(w.a)(x.a.mark((function e(a,t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.delete("/api/tikets/tareas/".concat(a),{params:{proyecto:t}});case 3:c({type:"ELIMINAR_TAREA",payload:a}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c({type:"TAREA_ERROR",payload:{msg:"Hubo un error al eliminar la tarea",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a,t){return e.apply(this,arguments)}}(),i=function(){var e=Object(w.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.put("/api/tikets/tareas/".concat(a._id),a);case 3:t=e.sent,c({type:"ACTUALIZAR_TAREA",payload:t.data.tarea}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:"TAREA_ERROR",payload:{msg:"Hubo un error al actualizar la tarea",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(y.Provider,{value:{tareasProyecto:o.tareasProyecto,errorTarea:o.errorTarea,tareaSeleccionada:o.tareaSeleccionada,obtenerTareas:l,agregarTarea:s,validarTarea:function(){c({type:"VALIDAR_TAREA"})},eliminarTarea:u,guardarTareaActual:function(e){c({type:"TAREA_ACTUAL",payload:e})},actualizarTarea:i}},e.children)},F=function(e,a){switch(a.type){case"MOSTRAR_ALERTA":return{alerta:a.payload};case"OCULTAR_ALERTA":return{alerta:null};default:return e}},M=function(e){var a=Object(r.useReducer)(F,{alerta:null}),t=Object(m.a)(a,2),o=t[0],c=t[1];return n.a.createElement(p.Provider,{value:{alerta:o.alerta,mostrarAlerta:function(e,a){c({type:"MOSTRAR_ALERTA",payload:{msg:e,categoria:a}}),setTimeout((function(){c({type:"OCULTAR_ALERTA"})}),3e3)}}},e.children)},D=function(e,a){switch(a.type){case"REGISTRO_EXITOSO":case"LOGIN_EXITOSO":return localStorage.setItem("token",a.payload.token),Object(i.a)({},e,{autenticado:!0,mensaje:null,cargando:!1});case"OBTENER_USUARIO":return Object(i.a)({},e,{autenticado:!0,usuario:a.payload,cargando:!1});case"CERRAR_SESSION":case"LOGIN_ERROR":case"REGISTRO_ERROR":return localStorage.removeItem("token"),Object(i.a)({},e,{token:null,usuario:null,mensaje:a.payload,autenticado:!1,cargando:!1});default:return e}},H=function(e){e?S.defaults.headers.common["x-auth-token"]=e:delete S.defaults.headers.common["x-auth-token"]},B=function(e){var a={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},t=Object(r.useReducer)(D,a),o=Object(m.a)(t,2),c=o[0],l=o[1],s=function(){var e=Object(w.a)(x.a.mark((function e(a){var t,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/api/tikets/usuarios",a);case 3:t=e.sent,l({type:"REGISTRO_EXITOSO",payload:t.data}),u(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},l({type:"REGISTRO_ERROR",payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(w.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=localStorage.getItem("token"))&&H(a),e.prev=2,e.next=5,S.get("/api/tikets/auth");case 5:t=e.sent,l({type:"OBTENER_USUARIO",payload:t.data.usuario}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l({type:"LOGIN_ERROR"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(w.a)(x.a.mark((function e(a){var t,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.post("/api/tikets/auth",a);case 3:t=e.sent,l({type:"LOGIN_EXITOSO",payload:t.data}),u(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.msg),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},l({type:"LOGIN_ERROR",payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(d.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,cargando:c.cargando,registrarUsuario:s,iniciarSession:i,usuarioAutenticado:u,cerrarSession:function(){try{l({type:"CERRAR_SESSION"})}catch(a){console.log(a.response.data.msg);var e={msg:a.response.data.msg,categoria:"alerta-error"};l({type:"LOGIN_ERROR",payload:e})}}}},e.children)},V=t(34),z=function(e){var a=e.component,t=Object(V.a)(e,["component"]),o=Object(r.useContext)(d),c=o.autenticado,l=o.usuarioAutenticado,u=o.cargando;return Object(r.useEffect)((function(){l()}),[]),n.a.createElement(s.b,Object.assign({},t,{render:function(e){return c||u?n.a.createElement(a,e):n.a.createElement(s.a,{to:"/"})}}))},X=localStorage.getItem("token");X&&H(X);var J=function(){return console.log("http://localhost:4000/"),n.a.createElement(U,null,n.a.createElement(M,null,n.a.createElement(Y,null,n.a.createElement(B,null,n.a.createElement(l.a,null,n.a.createElement(s.d,null,n.a.createElement(s.b,{exact:!0,path:"/",component:b}),n.a.createElement(s.b,{exact:!0,path:"/nueva-cuenta",component:E}),n.a.createElement(z,{exact:!0,path:"/proyectos",component:_})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b262f44d.chunk.js.map