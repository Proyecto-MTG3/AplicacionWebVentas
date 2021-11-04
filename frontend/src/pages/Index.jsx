import React from "react";
import 'styles/styles.css';
//import Google from '../img/googleLogo.png';
//import {Link} from "react-router-dom";
//import AuthLayout from "layouts/AuthLayout";
import 'react-bootstrap';
import 'bootstrap';
import GoogleLogin from "react-google-login";



function Index() {

  function responseGoogle(response) {
    if(response && response.tokenId) {
      console.log(response);

         fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: response.tokenId,
                email: response.profileObj.email,
                nombres: response.profileObj.givenName,
                apellidos: response.profileObj.familyName
            })
        }).catch((err)=>console.error(err))
        .then((respuesta)=>respuesta.json())
        .then((respuestaServidor)=>{
            console.log(respuestaServidor);
             localStorage.setItem('token', response.tokenId);
            localStorage.setItem('usuario', JSON.stringify(respuestaServidor.usuario));
            window.location.href = '/admin/MenuPrincipal';  
        }); 
    }
} 

return (
    <div>
    <center>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <h1>Login</h1>
        <GoogleLogin
            clientId="789011637624-7i7mvke7ke6rer0pc7e7f8dgha94igno.apps.googleusercontent.com"               
            buttonText = "Acceder con Google"

            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
        </center>
    </div>
)






   
/*   return (

    <div className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Ingreso</h3></div>
                    <div className="card-body">
                      <form>
                        <div className="form-floating mb-3">
                          <input className="form-control"  id="inputEmail" type="email"  autoComplete='off'  />
                          <label htmlFor="inputEmail">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control"  id="inputPassword" type="password"  autoComplete='off'  />
                          <label htmlFor="inputPassword">Contraseña</label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="inputRememberPassword" type="checkbox" value =''  />
                          <label className="form-check-label" htmlFor="inputRememberPassword">Recordar contraseña</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to="aut/Password">¿Olvidó su contraseña?</Link>
                          <button className="btn btn-primary">
                            <Link to="/Index" type="submit"/>Ingresar
                          </button>                        
                        </div>                       
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small"><Link to="aut/Register">Crear una nueva cuenta</Link></div>
                    </div>
                    


                             
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <AuthLayout />
      </div>
    </div>
  ); */
}

export default Index;