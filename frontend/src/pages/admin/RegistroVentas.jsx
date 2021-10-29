import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'react-bootstrap';
import 'bootstrap';
import 'styles/styles.css';

 

const RegistroVentas = () => {
    return (

    <div className="sb-nav-fixed">
        <Navbar/>
            <div id="layoutSidenav">
                <Sidebar/>
                    <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid px-4">
                                    <h1 className="mt-4">Registro ventas</h1>
                                    <ol className="breadcrumb mb-4">
                                        <li className="breadcrumb-item"><div href="index.html">Menu principal</div></li>
                                        <li className="breadcrumb-item active">Maestro ventas</li>
                                    </ol>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <p>En este módulo puede registrar ventas.</p>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-table me-1"></i>
                                            Ventas 
                                        </div>
                                        
                                        <div className="card-body">
            

                                            <div id="datatablesSimple" > 

                                                <div className="row">
                                                    <div className="col">
                                                    
                                                    <input type="date" className="form-control" placeholder="Fecha" aria-label="Fecha"/>
                                                    </div>
                                                    <div class="col">
                                                        
                                                    <input type="text" className="form-control" placeholder="Id Venta" aria-label="Id Venta"/>
                                                    </div>
                                                </div>
                                             </div>   
                                                <br></br>


                                            <table className= "table  table-bordered" >

                                                <thead>
                                                    <tr>
                                                        <th>ID producto</th>
                                                        <th>Descripcion</th>
                                                        <th>Cantidad</th>
                                                        <th>Valor Unitario</th>                           
                                                    </tr>
                                                </thead>
                                            

                                                
                                                <tbody>

                                                    <tr>
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
                                                            <input className="dataTable-input" type="number"/>
                                                        </td>                                            
                                                    </tr>

                                                    <tr>
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
                                                            <input className="dataTable-input" type="number"/>
                                                        </td>                                            
                                                    </tr>

                                                    <tr>
                                                        <td />                  
                                                        <td />

                                                        <th>
                                                            TOTAL
                                                        </th>
                                                        <td>
                                                            <input className="dataTable-input" type="number"/>
                                                        </td>                                            
                                                    </tr>                                        
                                                    
                                                </tbody>                                                                       
                                            </table> 
                                            <div className="input-group mb-3">
                                                <span className="input-group-text"  id="basic-addon1">Documento Cliente</span>
                                                <input type="number" className="form-control" placeholder="Documento" aria-label="Documento" aria-describedby="basic-addon1"/>                            <span class="input-group-text" id="basic-addon2">Nombre</span>
                                                <input type="text" className="form-control" placeholder="Nombre Cliente" aria-label="Nombre Cliente" aria-describedby="basic-addon2"/>

                                            </div>
                                            
                                            
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">Vendedor</span>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                            </div>


                                            
                                                <div className="form-check">
                                                    <div className="input-group mb-3"></div>
                                                    <span className="input-group-text" id="basic-addon3"> Estado  </span>
                                                    <br></br>                                         
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">  En proceso  </label>
                                                </div>    
                                                
                                                
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Entregada
                                                    </label>
                                                </div>
                                                
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    Cancelada
                                                    </label>
                                                </div><br></br>   
                                                
                                                
                                            
                                            
                                            <div><button onclick="agregarVentas()"  type="button" className="btn btn-success">Agregar Ventas</button></div>
{/*                                             <center>       
                                                    <script>
                                                        function agregarVentas(evento) {
                                                        
                                                        alert("¡Registro creado con exito!")
                                                        }
                                                    </script>
                                            </center> */}  
                                                
            
                                                <div className="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                            <h3>Cabecera de la ventana</h3>
                                                        </div>
                                                        <div className="modal-body">
                                                            <h4>Texto de la ventana</h4>
                                                            Mas texto en la ventana.   
                                                    </div>
                                                        <div className="modal-footer">
                                                        <div href="#" data-dismiss="modal" className="btn btn-danger">Cerrar</div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>                                   
                                            
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

export default RegistroVentas;     
