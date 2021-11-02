import React from 'react'
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/styles.css';
import { Form, Button, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';

 


const MaestroUsuario = () => {

    const [idUsers_add, set_idUsers_add] = useState(0);
    const [nombre_add, set_nombre_add] =  useState("");
    const [email_add, set_email_add] = useState("");
    const [password_add, set_password_add] = useState("");
    const [rol_add, set_rol_add] = useState("");
    const [state_add, set_state_add] = useState("true");
  
    const [idUsers_update, set_idUsers_update] = useState(0);
    const [nombre_update, set_nombre_update] =  useState("");
    const [email_update, set_email_update] = useState("");
    const [password_update, set_password_update] = useState("");
    const [rol_update, set_rol_update] = useState("");
    const [state_update, set_state_update] = useState("Pendiente");
    const [id_update, set_id_update] = useState(0);
  
  
    const [users, set_users] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/v1/users/list').then((res) =>{
          console.log(res.data.users)
          set_users(res.data.users)
        });
       }, [])
     
   
     const add_users_db = () => {
       console.log(idUsers_add + nombre_add + email_add + password_add + rol_add + state_add)
       Axios.post('http://localhost:3001/api/v1/users/add',{
         idUsers: idUsers_add,
         nombre: nombre_add,
         email: email_add,
         password: password_add,
         rol: rol_add,
         state: state_add
       });
     }
   
     const delete_users = (_id) => {
       Axios.delete('http://localhost:3001/api/v1/users/delete/' + _id)
     }
   
     const update_users = (_id) => {
       Axios.put('http://localhost:3001/api/v1/users/update',{
         _id: _id,
         idUsers: idUsers_update,
         nombre: nombre_update,
         email: email_update,
         password: password_update,
         rol: rol_update,
         state: state_update
       })
     }



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
                                        <button onClick={add_users_db}  class="btn btn-success">Agregar Usuario</button>
                                    </div>
                                    <div id="datatablesSimple">
                                        <thead>
                                            <tr>
                                                <th>Codigo Usuario</th>
                                                <th>Nombre</th>
                                                <th>Correo Electrónico</th>
                                                <th>Contraseña</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>

                                            <tr> 
                                                <td>
                                                    <input className="input" type="number" id="idUsuario"   required  onChange={(e) => { set_idUsers_add(e.target.value); }}></input>
                                                </td>

                                                <td>
                                                    <input className="input" type="text" id="nombre"  required  onChange={(e) => { set_nombre_add(e.target.value); }}></input>
                                                </td>

                                                <td>
                                                    <input className="input" type="text" id="email"  required  onChange={(e) => {set_email_add(e.target.value); }}></input>
                                                </td>
                                                <td>
                                                    <input className="input" type="text" required  onChange={(e) => { set_password_add(e.target.value); }}/>
                                                </td>                                            
                                                <td>
                                                    <input className="input" type="text" onChange={(e) => { set_rol_add(e.target.value); }}/>
                                                </td> 
                                                <Form.Group className="mb-3" controlId="formBasicUnitCost">
                                                    <Form.Check
                                                    inline
                                                    label = "Pendiente"
                                                    name = "estado"
                                                    type = "radio"
                                                    id = '1'
                                                    onChange = {(e) =>{
                                                        set_state_add("Pendiente");
                                                    }}/>            

                                                    <Form.Check
                                                        inline
                                                        label = "Autorizado"
                                                        name = "estado"
                                                        type = "radio"
                                                        id = '0'
                                                        onChange = {(e) =>{
                                                        set_state_add("Autorizado");
                                                    }}/>

                                                    <Form.Check
                                                        inline
                                                        label = "Bloqueado"
                                                        name = "estado"
                                                        type = "radio"
                                                        id = '0'
                                                        onChange = {(e) =>{
                                                        set_state_add("Bloqueado");
                                                    }}/>

                                                </Form.Group>                                      
                                            </tr>
                                            <hr/>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th>Codigo Usuario</th>
                                                <th>Nombre</th>
                                                <th>Correo Electronico</th>
                                                <th>Contraseña</th>
                                                <th>Rol</th>
                                                <th>Estado</th>
                                                <th>Actualizar</th>
                                                <th>Eliminar</th>              
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                users.map((value, key) =>
                                                    <tr>
                                                    <td>
                                                        {key}
                                                    </td>
                                                    <td>
                                                        {value.idUsers}
                                                    </td>
                                                    <td>
                                                    {value.nombre}
                                                    </td>
                                                    <td>
                                                    {value.email}
                                                    </td>
                                                    <td>
                                                    {value.password}
                                                    </td>
                                                    <td>
                                                    {value.rol}
                                                    </td>
                                                    <td>
                                                    {value.state.toString()}
                                                    </td> 
                                                    <td>
                                                    <Button variant = 'warning' onClick ={
                                                        () => {
                                                        set_id_update(value._id);
                                                        set_idUsers_update(value.idUsers);
                                                        set_nombre_update(value.nombre);
                                                        set_email_update(value.email);
                                                        set_password_update(value.password);
                                                        set_rol_update(value.rol);
                                                        set_state_update(value.state.toString());

                                                        document.getElementById('idUsers_update').defaultValue=value.idUsers;
                                                        document.getElementById('nombre_update').defaultValue=value.nombre;
                                                        document.getElementById('email_update').defaultValue=value.email;
                                                        document.getElementById('password_update').defaultValue=value.password;
                                                        document.getElementById('rol_update').defaultValue=value.rol;
                                                        
                                                        }}
                                                        >Editar
                                                        </Button>
                                                    </td>
                                                    <td>
                                                    <Button variant = 'danger' onClick={() => delete_users(value._id)}> Eliminar</Button>
                                                    </td>                                                                                                          
                                                    </tr>
                                                )
                                                }
                                            </tbody>
                                        </Table>

                                                <hr/>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicidUsers">
                                                <Form.Label>Codigo del usuario</Form.Label>
                                                <Form.Control disable='true' id='idUsers_update' type="number" placeholder=" Ingrese el codigo del usuario" onChange = {
                                                (e) =>{
                                                    set_idUsers_update(e.target.value);
                                                } }/>            
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicNombre">
                                                <Form.Label>Nombre Usuario</Form.Label>
                                                <Form.Control id='nombre_update' type="text" placeholder=" Ingrese el nombre del usuario" onChange = {
                                                (e) =>{
                                                    set_nombre_update(e.target.value);
                                                }
                                                } />            
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control id = 'email_update' type="text" placeholder=" Ingrese el email" onChange = {
                                                (e) =>{
                                                    set_email_update(e.target.value);
                                                }
                                                } />            
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control id = 'password_update' type="text" placeholder=" Ingrese el password" onChange = {
                                                (e) =>{
                                                    set_password_update(e.target.value);
                                                }
                                                } />            
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicRol">
                                                <Form.Label>Rol</Form.Label>
                                                <Form.Control id = 'rol_update' type="text" placeholder=" Ingrese el rol" onChange = {
                                                (e) =>{
                                                    set_rol_update(e.target.value);
                                                }
                                                } />            
                                            </Form.Group> 

                                            <Form.Group className="mb-3" controlId="formBasicUnitCost2">
                                                <Form.Check
                                                inline
                                                label = "Pendiente"
                                                name = "estado"
                                                type = "radio"
                                                id = '1'
                                                onChange = {(e) =>{
                                                    set_state_update("Pendiente");
                                                }}/>            

                                                <Form.Check
                                                    inline
                                                    label = "Autorizado"
                                                    name = "estado"
                                                    type = "radio"
                                                    id = '0'
                                                    onChange = {(e) =>{
                                                    set_state_update("Autorizado");
                                                }}/>

                                                <Form.Check
                                                    inline
                                                    label = "Bloqueado"
                                                    name = "estado"
                                                    type = "radio"
                                                    id = '0'
                                                    onChange = {(e) =>{
                                                    set_state_update("Bloqueado");
                                                }}/>            
                                            </Form.Group> 


                                            <Button variant="warning"  onClick = {
                                                ()=>{

                                                
                                                update_users(id_update)}} >
                                                Actualizar
                                            </Button>
                                        </Form>
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

export default MaestroUsuario;  