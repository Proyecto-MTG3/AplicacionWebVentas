import React from 'react'
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import 'react-bootstrap';
import 'bootstrap';
import 'styles/styles.css';



const RegistroProducto = () => {
    return (


    <div className="sb-nav-fixed">
        <Navbar/>
            <div id="layoutSidenav">
                <Sidebar/>
                    <div id="layoutSidenav_content">
                            <main>
                                <div className="well form-horizontal " action=" " method="post"  id="contact_form">                        
                                    <div className="container-fluid "   styles="position:-ms-page;">
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-primary me-md-2" type="button">Productos Registrados</button>
                                            <button type="button" className="btn btn-success"><span className="glyphicon glyphicon-home"></span>
                                            Inicio</button>
                                        </div>
                                    </div>
                                    <div><legend><center><h2>Registro Productos  MTG3</h2></center></legend>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>                                       
                                    </div> 
                                    <center>
                                        <div clasNames="form-group ">
                                            <label className="col-md-4 control-label">ID</label>  
                                            <div className="col-md-4 inputGroupContainer">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-barcode"></i></span>
                                                    <input  name="first_name" placeholder="NUMERO ID" className="form-control"  type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <label className="col-md-4 control-label" >NOMBRE PRODUCTO</label> 
                                            <div className="col-md-4 inputGroupContainer">
                                                <div className="input-group">
                                                    <span className="input-group-addon" href="index.html"><i className="glyphicon glyphicon-user"></i></span>
                                                    <input name="last_name" placeholder="NOMBRE PRODUCTO" className="form-control"  type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <label className="col-md-4 control-label">VALOR UNITARIO</label>  
                                            <div className="col-md-4 inputGroupContainer">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                                                    <input  name="user_name" placeholder="$ $ $" className="form-control"  type="number"/>
                                                </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className= "form-group "> 
                                            <label className="col-md-4 control-label">ESTADO</label>
                                            <div className="col-md-4 selectContainer">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                                    <select name="department" className="form-control selectpicker">
                                                        <option value=""disabled="disabled">SELECCION ESTADO </option>
                                                        <option>DISPONIBLE</option>
                                                        <option>NO DISPONIBLE</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </center>    
                                    <br></br>                  
                                    <center>
                                        <div>
                                            <button onclick="cancelarLista()" class="btn btn-danger">CANCELAR</button>
                                            <button onclick="agregarLista()" class="btn btn-success">AGREGAR</button>

                                            <script>
                                                {/* function agregarLista(evento) {
                                                event.preventDefault()
                                                alert ("¡Registro creado con exito!");
                                                }
                                                function cancelarLista(evento) {
                                                    event.preventDefault()
                                                    alert("¡Registro cancelado!")  
                                                } */}
                                            </script>
                                        </div>    
                                    </center>                       
                                </div>
                            </main>
                        <Footer />
                    </div>                            
            </div>
            
    </div>
    );
}

export default RegistroProducto;      