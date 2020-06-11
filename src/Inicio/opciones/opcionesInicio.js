import React from 'react'
import './opcionesInicio.css'
import { Link } from 'react-router-dom'

const Opciones = () => (
    <div className="container">
        <h1>Sistema Electronico de Contratacion Publica</h1>
        <div className="container-opciones">
            <Link className="container-opciones__button" to="/session">Salir</Link>
            <Link className="container-opciones__button" to="/nuevo">Anadir nuevos contratos</Link>
            <Link className="container-opciones__button" to="/main/secop">Seguimiento</Link>
        </div>
    </div>
)

export default Opciones