import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'react-bootstrap';
import 'bootstrap';
import 'styles/styles.css';

 


const MaestroUsuario = () => {


    
    return (

    <div className="sb-nav-fixed">
         <Navbar/>
        <div id="layoutSidenav">
            <Sidebar/>    
            <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <h1 class="mt-4">Maestro Usuarios</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><a href="index.html">Menu principal</a></li>
                                <li class="breadcrumb-item active">Maestro Usuarios</li>
                            </ol>
                            <div class="card mb-4">
                                <div class="card-body">
                                    <p>En este módulo puede visualizar, buscar y actualizar los usuarios del programa.</p>
                                </div>
                            </div>
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-table me-1"></i>
                                    Usuarios
                                </div>
                                <div class="card-body">
                                    <div>
                                        <button onclick="agregarLista()" class="btn btn-success">Agregar Usuario</button>
                                    </div>
                                    <table id="datatablesSimple">
                                        <thead>
                                            <tr>
                                                <th>Accion</th>
                                                <th>Correo Electrónico</th>
                                                <th>Contraseña</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>


                                        <tbody>

                                            <tr>
                                                <td>
                                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                        <div class="btn-group mr-2" role="group" aria-label="First group">
                                                            <button type="button" class="btn btn-secondary">Editar</button>
                                                            <button type="button" class="btn btn-secondary">Guardar</button>
                                                            <button type="button" class="btn btn-secondary">Cancelar</button>
                                                        </div>
                                                    </div>
                                                </td>                                       
                                                <td>
                                                    <input className="dataTable-input" type="email" id="email" pattern=".+@globex\.com" size="30" required></input>
                                                </td>
                                                <td>
                                                    <input className="dataTable-input" type="password" required/>
                                                </td>                                            
                                                <td>
                                                    <input className="dataTable-input" type="text"/>
                                                </td>
                                                <td>  
                                                    <select class="form-select" id="inputGroupSelect01">
                                                        <option selected>Choose...</option>
                                                        <option value="1">Pendiente</option>
                                                        <option value="2">Autorizado</option>
                                                        <option value="3">No Autorizado</option>                                                           
                                                    </select>
                                                </td>                                           
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                        <div class="btn-group mr-2" role="group" aria-label="First group">
                                                            <button type="button" class="btn btn-secondary">Editar</button>
                                                            <button type="button" class="btn btn-secondary">Guardar</button>
                                                            <button type="button" class="btn btn-secondary">Cancelar</button>
                                                        </div>
                                                    </div>
                                                </td>                                       
                                                <td>
                                                    <input className="dataTable-input" type="email" id="email" pattern=".+@globex\.com" size="30" required></input>
                                                </td>
                                                <td>
                                                    <input className="dataTable-input" type="password" required/>
                                                </td>                                            
                                                <td>
                                                    <input className="dataTable-input" type="text"/>
                                                </td>
                                                <td>  
                                                    <select class="form-select" id="inputGroupSelect01">
                                                        <option selected>Choose...</option>
                                                        <option value="1">Pendiente</option>
                                                        <option value="2">Autorizado</option>
                                                        <option value="3">No Autorizado</option>                                                           
                                                    </select>
                                                </td>                                           
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                        <div class="btn-group mr-2" role="group" aria-label="First group">
                                                            <button type="button" class="btn btn-secondary">Editar</button>
                                                            <button type="button" class="btn btn-secondary">Guardar</button>
                                                            <button type="button" class="btn btn-secondary">Cancelar</button>
                                                        </div>
                                                    </div>
                                                </td>                                       
                                                <td>
                                                    <input className="dataTable-input" type="email" id="email" pattern=".+@globex\.com" size="30" required></input>
                                                </td>
                                                <td>
                                                    <input className="dataTable-input" type="password" required/>
                                                </td>                                            
                                                <td>
                                                    <input className="dataTable-input" type="text"/>
                                                </td>
                                                <td>  
                                                    <select class="form-select" id="inputGroupSelect01">
                                                        <option selected>Choose...</option>
                                                        <option value="1">Pendiente</option>
                                                        <option value="2">Autorizado</option>
                                                        <option value="3">No Autorizado</option>                                                           
                                                    </select>
                                                </td>                                            
                                            </tr>

                                        </tbody>
                                    </table>
                        
                                </div>
                            </div>
                        </div>
                    </main>
                <Footer />             
            </div>
        </div>
    </div>


    );
}

export default MaestroUsuario;  