import React, { useState } from 'react'
import './elemento-nuevoContrato.css'
import Documentos from '../../Contrato/documento/listaDocumentos'

const Nuevo = () => {
    const [idContrato, setId] = useState("");
    const [objeto, setObjeto] = useState("");
    const [nombreContratante, setNombreContratante] = useState("");
    const [nombreContratista, setNombreContratista] = useState("");
    const [tipopersona, setTipopersona] = useState("");
    const [valorcontrato, setValorcontrato] = useState("");
    const [fechainicio, setFechainicio] = useState("");
    const [fechaactainicio, setFechaactainicio] = useState("");
    const [fechatermminacion, setFechatermminacion] = useState("");
    const [cdp, setCdp] = useState("");
    const [rp, setRp] = useState("");
    const [poliza, setPoliza] = useState("");
    const [status, setStatus] = useState();
    const [documentosData, setDocumentosData] = useState([]);

    const idHandlerChange = (e) => {
        setId(e.target.value)
    }
    const objetoHandlerChange = (e) => {
        setObjeto(e.target.value)
    }
    const nombreContratanteHandlerChange = (e) => {
        setNombreContratante(e.target.value)
    }
    const nombreContratistaHandlerChange = (e) => {
        setNombreContratista(e.target.value)
    }
    const tipopersonaHandlerChange = (e) => {
        setTipopersona(e.target.value)
    }
    const valorcontratoHandlerChange = (e) => {
        setValorcontrato(e.target.value)
    }
    const fechainicioHandlerChange = (e) => {
        setFechainicio(e.target.value)
    }
    const fechaactainicioHandlerChange = (e) => {
        setFechaactainicio(e.target.value)
    }
    const fechatermminacionHandlerChange = (e) => {
        setFechatermminacion(e.target.value)
    }
    const cdpHandlerChange = (e) => {
        setCdp(e.target.value)
    }
    const rpHandlerChange = (e) => {
        setRp(e.target.value)
    }
    const polizaHandlerChange = (e) => {
        setPoliza(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contrato = {
            //nombre en la base de datos: nombre del html,
            idContrato,
            objeto,
            nombreContratante,
            nombreContratista,
            tipopersona,
            valorcontrato,
            fechainicio,
            fechaactainicio,
            fechatermminacion,
            cdp,
            rp,
            poliza,
        };
        saveContrato(contrato);

        const persona = {
            tipoPersona: tipopersona
        }
        
        buscarDocumentos(persona)

    }

       
      
              const saveContrato = async (contrato) => {
                  const contratoString = JSON.stringify(contrato)
                  const res = await fetch('http://localhost:3000/api/contrato/crear', {
                      method: 'POST',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: contratoString
                  })
                  
                  const json = await res.json()
                  setStatus(json);
              }


              

              const buscarDocumentos = async (persona) =>{
                  const datosDocumentos=JSON.stringify(persona)
                  const documentos = await fetch('http://localhost:3000/api/contrato/buscarDoc',{
                      method: 'POST',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: datosDocumentos

                  })
                  const json = await documentos.json()
                  console.log({ json })
                  setDocumentosData(json.data);
              }




            return (


                <div className="nuevoContrato">
                    <h2>Informacion del contrato</h2>

                    <form className="nuevoContrato-input" onSubmit={handleSubmit}>
                        <div>
                            <label>No Contrato: </label>
                            <input id="idContrato" type="text" onChange={idHandlerChange} value={idContrato} required />
                        </div>
                        <div>
                            <label>Objeto: </label>
                            <input id="objeto" type="text" onChange={objetoHandlerChange} value={objeto} required />
                        </div>
                        <div>
                            <label>Nombre del contrantante: </label>
                            <input id="nombreContratante" type="text" onChange={nombreContratanteHandlerChange} value={nombreContratante} required />
                        </div>
                        <div>
                            <label>Nombre del contratista: </label>
                            <input id="nombreContratista" type="text" onChange={nombreContratistaHandlerChange} value={nombreContratista} required />
                        </div>
                        <div>
                            <label>Tipo de persona: </label>
                            <select id="tipopersona" onChange={tipopersonaHandlerChange} value={tipopersona} required>
                                <option>Seleccione alguna de las opciones</option>
                                <option value="Natural">Natural</option>
                                <option value="Juridica">Juridica</option>
                            </select>
                        </div>
                        <div>
                            <label>Valor: </label>
                            <input id="valorcontrato" type="number" min="1" onChange={valorcontratoHandlerChange} value={valorcontrato} required/>
                        </div>
                        <div>
                            <label>Fecha Inicio: </label>
                            <input id="fechainicio" type="date" onChange={fechainicioHandlerChange} value={fechainicio} required/>
                        </div>
                        <div>
                            <label>Fecha del acta de inicio: </label>
                            <input id="fechaactainicio" type="date" onChange={fechaactainicioHandlerChange} value={fechaactainicio} required/>
                        </div>
                        <div>
                            <label>Fecha de terminacion: </label>
                            <input id="fechatermminacion" type="date" onChange={fechatermminacionHandlerChange} value={fechatermminacion} required/>
                        </div>
                        <div>
                            <label>CDP: </label>
                            <input id="cdp" type="number" min="1" onChange={cdpHandlerChange} value={cdp} required/>
                        </div>
                        <div>
                            <label>RP: </label>
                            <input id="rp" type="number" min="1" onChange={rpHandlerChange} value={rp} required/>
                        </div>
                        <div>
                            <label>Polizas: </label>
                            <select id="poliza" onChange={polizaHandlerChange} value={poliza} required>
                                <option>Seleccione alguna de las opciones</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>

                        </div>

                        


                        <div>
                            <button>Enviar</button>
                        </div>
                        {
                            status ?
                             
                            <div>{status.message}</div>
                           
                               

                                : <></>
                                


                        }  
                    </form>

                    <hr />
                                <Documentos documentos={documentosData}
                                            idContrac= {idContrato} />
                    
                </div>
            )

        
    

}

export default Nuevo