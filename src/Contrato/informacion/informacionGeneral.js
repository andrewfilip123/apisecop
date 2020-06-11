import React, { useState, useEffect } from 'react'
import './element-informacion.css'
import { Link, useParams } from 'react-router-dom'

const Informacion = () => {
const {idContrato} = useParams();
    const [informacionContrato, setInformacionContrato] = useState([]);

    useEffect(() => {
        const getInformacion = async () => {
            const response = await fetch(`http://localhost:3000/api/contrato/listar/${idContrato}`);
            const responseJSON = await response.json();
            console.log({ responseJSON })
            setInformacionContrato(responseJSON);
        }
        getInformacion();
    }, [idContrato]);



    return(
    <React.Fragment>

       
        <div className="informacion-titulo">
    <h1>Informacion del contrato</h1>

        </div>
        <div className="informacion-datosGenerales">
            <Link className="button" to="/main/secop">Regresar</Link>
           

            <table className="contratos-tabla">
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                {

                informacionContrato.map((informacion) => {

                    return (
                        <tbody key={informacion.id}>
                    <tr>
                        <td>No Contrato:</td>
                        <td>{informacion.id}</td>
                    </tr>
                    <tr>
                        <td>Objeto</td>
                        <td>{informacion.objeto}</td>
                    </tr>
                    <tr>
                        <td>Nombre del contrantante</td>
                        <td>{informacion.nombrecontratante}</td>
                    </tr>
                    <tr>
                        <td>Nombre del contratista</td>
                        <td>{informacion.nombrecontratista}</td>
                    </tr>
                    <tr>
                        <td>Tipo de persona</td>
                        <td>{informacion.tipopersona}</td>
                    </tr>
                    <tr>
                        <td>Valor:</td>
                        <td>{informacion.valorcontrato}</td>
                    </tr>

                    <tr>
                        <td>Fecha Inicio</td>
                        <td>{informacion.fechainicio}</td>
                    </tr>
                    <tr>
                        <td>Fecha del acta de inicio</td>
                        <td>{informacion.fechaactainicio}</td>
                    </tr>
                    <tr>
                        <td>Fecha de terminacion</td>
                        <td>{informacion.fechaterminacion}</td>
                    </tr>
                    <tr>
                        <td>CDP:</td>
                        <td>{informacion.cdp}</td>
                    </tr>
                    <tr>
                        <td>RP:</td>
                        <td>{informacion.rp}</td>
                    </tr>
                    <tr>
                        <td>Poliza:</td>
                        <td>{informacion.poliza}</td>
                    </tr>
                    <tr>
                        <td>Modificacion:</td>
                        <td>{informacion.modificado}</td>
                    </tr>

                    </tbody>
                    )
            }

                )
            }
                
           
            </table>
         
            <ul>
                <li>A continuacion, marque la casilla si el contrato ha sido modificado:  
                    
                    <input type="checkbox" /></li>
            </ul>            
        </div>
    </React.Fragment>
)
}

export default Informacion