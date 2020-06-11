import React, { useState } from 'react';
import '../credenciales/elemento-styles.css';

function Credenciales() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");


    function validateForm() {
        return user.length > 0 && password.length > 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const datosCredenciales = {
            username: user,
            password: password
        };

        verificacion(datosCredenciales);

       

    }

    const verificacion = async (datos) =>{
        const datosString=JSON.stringify(datos);
        const resultado = await fetch('http://localhost:3000/api/contrato/obtenerusuario',{
                      method: 'POST',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: datosString

                  });
                  const json = await resultado.json()
                  console.log({ json })
                  if(json.status==='success'){
                    alert('Bienvenido!')
                    window.location.replace('/main/secop')
                    }else{
                    alert('Sus credenciales son incorrectas, !Inténtelo de nuevo!')
                    }
    }
    return (
        
    <React.Fragment>

            <div className="credenciales-ppl">
                <form onSubmit={handleSubmit}>
                
                    <div className="credenciales-ppl__data">
                        <input className="credenciales-ppl__data--inputStyle" type="text"
                            placeholder="Nombre de Usuario" value={user} onChange={e => setUser(e.target.value)} />
                    </div>
                                    
                    <div className="credenciales-ppl__data">
                        <input className="credenciales-ppl__data--inputStyle" type="password" placeholder="Contrasena"
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="credenciales-ppl__data">
                        <button className="credenciales-ppl__button" disabled={!validateForm()}>Ingresar</button>
                </div>
            </form>
        </div>
        </React.Fragment> 
    )
}

export default Credenciales;