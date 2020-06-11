import React from 'react'
import './contrato.css'
import Informacion from '../Contrato/informacion/informacionGeneral'
import Fase from '../Contrato/fases/fase'
import Opciones from '../Inicio/opciones/opcionesInicio'



class ContratoSECOP extends React.Component {

    render() {
        return (
            <div>
                <Opciones />
                <hr />
                <Informacion />
                <hr />
                <Fase/>    
            </div>

           
        )
    }
}

export default ContratoSECOP