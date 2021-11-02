import React from 'react'
import {Link} from "react-router-dom";
import 'react-bootstrap';
import 'bootstrap';

const Navbar = () => {
    return (
        <div className="sb-topnav navbar navbar-expand-lg- navbar-dark bg-dark">
            {/* Navbar Brand */}
            <div className="navbar-brand ps-3" ><center><h3>M.T.I.G3</h3></center></div>
            {/* Sidebar Toggle */}
              <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
                <i className="fas fa-bars"></i>
            </button>  
            {/* <!-- Navbar Search--> */}
             <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div clasNames="input-group">
                    <input className="form-control" type="text" rounded-md placeholder="Buscar..." aria-label="Buscar..." aria-describedby="btnNavbarSearch"/><button className="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form> 
            {/* <!-- Navbar--> */}
            
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user fa-fw"></i>
                    </div>                   
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/admin/MenuPrincipal" >Menu Principal</Link>
                        <Link className="dropdown-item" to="/admin/RegistroVentas" >Registro Ventas</Link>
                        <Link className="dropdown-item" to="/admin/MaestroVentas" >Maestro Ventas</Link>
                        <Link className="dropdown-item" to="/admin/RegistroProducto" >Registo Productos</Link>
                        <Link className="dropdown-item" to="/admin/MaestroProductos" >Mestro Productos</Link>
                        <Link className="dropdown-item" to="/admin/MaestroUsuario" >Maestro Usuario</Link>

                        <Link className="dropdown-item" to="close" >Salir</Link>
                    </ul>
                </li>
            </ul> 
        </div> 
    )
}

export default Navbar











