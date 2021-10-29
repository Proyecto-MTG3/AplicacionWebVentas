import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'styles/styles.css';
import 'react-bootstrap';
import 'bootstrap';



const MaestroProductos = () => {
    return (
        <div>
        <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
                <Sidebar/>   
                <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Maestro productos</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"><a href="index.html">Menu principal</a></li>
                                    <li className="breadcrumb-item active">Maestro productos</li>
                                </ol>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p>En este módulo puede visualizar, buscar y actualizar los productos.</p>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1"></i>
                                        Productos
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <button onclick="agregarLista()" class="btn btn-success">Agregar Producto</button>
                                        </div>                                
                                        <table id="datatablesSimple">
                                            <thead>
                                                <tr>
                                                    <th>Editar</th>
                                                    <th>Identificador</th>
                                                    <th>Descripción</th>
                                                    <th>Valor unitario</th>
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
                                                        <input className="dataTable-input" type="text" />
                                                    </td>
                                                    <td>
                                                        <input className="dataTable-input" type="text" />
                                                    </td>                                            
                                                    <td>
                                                        <input className="dataTable-input" type="number"/>
                                                    </td>
                                                    <td>  
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected>Choose...</option>
                                                            <option value="1">Disponible</option>
                                                            <option value="2">No Disponible</option>                                                          
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
                                                        <input className="dataTable-input" type="text"/>
                                                    </td>
                                                    <td>
                                                        <input className="dataTable-input" type="text" />
                                                    </td>                                            
                                                    <td>
                                                        <input className="dataTable-input" type="number"/>
                                                    </td>
                                                    <td>  
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected>Choose...</option>
                                                            <option value="1">Disponible</option>
                                                            <option value="2">No Disponible</option>                                                           
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
                                                        <input className="dataTable-input" type="text" />
                                                    </td>
                                                    <td>
                                                        <input className="dataTable-input" type="text" />
                                                    </td>                                            
                                                    <td>
                                                        <input className="dataTable-input" type="number"/>
                                                    </td>
                                                    <td>
                                                        <select class="form-select" id="inputGroupSelect01">
                                                            <option selected>Choose...</option>
                                                            <option value="1">Disponible</option>
                                                            <option value="2">No Disponible</option>                                                          
                                                        </select>
                                                    </td>                                            
                                                </tr>                                                                                                                     
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </main> 
                    <Footer/>
                </div>
            </div>
        </div>
</div>
  );
}

export default MaestroProductos;   