import React, { Component } from 'react'
import './element-fase.css'
import Documentos from '../documento/listaDocumentos'



class Fase extends Component {
    constructor() {
        super()
        this.state= {
            precon: false,
            con: false,
            postcon: false

        }
    }

    operationPrecon() {
        this.setState({
            precon: !this.state.precon,
            con: false,
            postcon: false
        })
    }

    operationCon() {
        this.setState({
            precon: false,
            con: !this.state.con,
            postcon: false
        })
    }

    operationPostcon() {
        this.setState({
            precon: false,
            con: false,
            postcon: !this.state.postcon,
            
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className="opciones">
                    <button className="opciones-fases" onClick={() => this.operationPrecon()}>Precontractual</button>
                    <button className="opciones-fases" onClick={() => this.operationCon()}>Contractual</button>
                    <button className="opciones-fases" onClick={() => this.operationPostcon()}>Postcontractual</button>
                </div>


                {this.state.precon ?
                    <div className="precon">
                        <h2>Documentos requeridos</h2>
                        <Documentos />
                    </div>
                    :null
                }

                {this.state.con ?
                    <div className="con">
                        <h2>Documentos requeridos</h2>
                        <Documentos />
                    </div>
                    : null
                }

                {this.state.postcon ?
                    <div className="postcon">
                        <h2>Documentos requeridos</h2>
                        <Documentos/>
                    </div>
                    : null
                }
            </React.Fragment>
    )
}
}

export default Fase