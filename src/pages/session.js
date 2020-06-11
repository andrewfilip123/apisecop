import React from 'react'
import Credenciales from '../Login/credenciales/elemento-credenciales'
import Encabezado from '../Login/encabezado/elemento-encabezado'
import Pie from '../Login/pie/elemento-pie'
import './session.css'


class Session extends React.Component {
    render() {
        return (
            <div className="session">
                <Encabezado /> 
                <Credenciales />
                <Pie />
            </div>
            )
    }
}

export default Session