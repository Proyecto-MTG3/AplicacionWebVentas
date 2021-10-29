import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'styles/styles.css';
import 'react-bootstrap';
import 'bootstrap';

 

const MaestroVentas = () => {
    return (

    <div className="sb-nav-fixed">
        <Navbar/>
            <div id="layoutSidenav">
                <Sidebar/>
                    <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid px-4">
                                    <h1 className="mt-4">Maestro ventas</h1>
                                    <ol className="breadcrumb mb-4">
                                        <li className="breadcrumb-item"><a href="index.html">Menu principal</a></li>
                                        <li className="breadcrumb-item active">Maestro ventas</li>
                                    </ol>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <p>En este módulo puede visualizar, buscar y actualizar las ventas.</p>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table me-1"></i>
                                            Ventas
                                        </div>
                                        <div className="card-body">
                                            <div>
                                                <button  className="btn btn-success">Agregar Ventas</button>
                                            </div>
                                             
                                            <table id="datatablesSimple">
                                                <thead>
                                                    <tr>
                                                        <th />
                                                        <th>Id Venta</th>
                                                        <th>Id Producto</th>
                                                        <th>Descripcion</th>
                                                        <th>Cantidad</th>
                                                        <th>Valor Unitario</th>
                                                        <th>Valor Total</th>
                                                        <th>Fecha Venta</th>
                                                        <th>Documento Cliente</th>
                                                        <th>Nombre Cliente</th>
                                                        <th>Vendedor</th>
                                                        <th>Estado</th>
                                                        
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                                                <button type="button" className="btn btn-secondary">Editar</button>
                                                                <button type="button" className="btn btn-secondary">Guardar</button>
                                                                <button type="button" className="btn btn-secondary">Cancelar</button>
                                                                </div>
                                                            </div>
                                                        </td>                                                                                                                                   
                                                                                         
                                                        <td>
                                                            <input className="dataTable-input" type="text" />
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="text"/>
                                                        </td>                                            
                                                        <td>
                                                            <input className="dataTable-input" type="text"/>
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="number"/>
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="number" />
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="number"/>
                                                        </td>                                            
                                                        <td>
                                                            <input className="dataTable-input" type="date"/>
                                                        </td>
                                                        <td>
                                                            <input className="dataTable-input" type="number"/>
                                                        </td> 
                                                        <td>
                                                            <input className="dataTable-input" type="text"/>
                                                        </td> 
                                                        <td>
                                                            <input className="dataTable-input" type="text"/>
                                                        </td>                                                                                                                                                             
                                                        <td>  <select className="form-select" id="inputGroupSelect01">
                                                            
                                                            <option value="1">En proceso</option>
                                                            <option value="2">Entregada</option>
                                                            <option value="3">Cancelada</option>
                                                        </select></td>
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

export default MaestroVentas;   