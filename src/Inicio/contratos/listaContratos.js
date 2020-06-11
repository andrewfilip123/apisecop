import React, { useState } from 'react'
import './listaContratos.css'
import { Link } from 'react-router-dom'


function Contratos(props) {

    function buscar() {
        const tablaObjetivo = document.getElementById('tablaContratos');
        const textoBuscar = document.getElementById('palabra').value.toLowerCase();
        let total = 0;

        for (let i = 1; i < tablaObjetivo.rows.length; i++) {
            if (tablaObjetivo.rows[i].classList.contains("noSearch")) {
                continue;
            }

            let encontrado = false;
            const registroCeldas = tablaObjetivo.rows[i].getElementsByTagName('td');

            for (let j = 0; j < registroCeldas.length && !encontrado; j++) {
                const comparar = registroCeldas[j].innerHTML.toLowerCase();

                if (textoBuscar.length === 0 || comparar.indexOf(textoBuscar) > -1) {
                    encontrado = true;
                    total++;
                }
            }

            if (encontrado) {
                tablaObjetivo.rows[i].style.display = '';
            } else {
                tablaObjetivo.rows[i].style.display = 'none';
            }
        }

        const lastTR = tablaObjetivo.rows[tablaObjetivo.rows.length-1];
        const td = lastTR.querySelector("td");
        lastTR.classList.remove("hide", "red");
        if (textoBuscar === "") {
            lastTR.classList.add("hide");
        } else if (total) {
            td.innerHTML = "Se han encontrado " + total + " coincidencias ";
        } else {
            lastTR.classList.add("red");
            td.innerHTML = "No se han encontrado coincidencias";
        }
    }





    return (

        <div className="contratos">

            <form className="contratos-form">
                <input className="contratos-form__input" type="text" placeholder="Search..." id="palabra" name="search" onKeyUp={buscar} />
            </form>


                <table id="tablaContratos">
                    <thead>
                        <tr>
                            <th colSpan="4">Contratos Registrados</th>
                        </tr>
                        <tr>
                            <th>No. Contrato</th>
                            <th>Contratista</th>
                            <th>Objeto</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                {

                    props.contratos.map((contrato) => {
                        
                        return (
                                <tbody key={contrato.id}>

                                <tr >
                                    <td><Link to={`/contrato/${contrato.id}`}>{contrato.id}</Link></td>
                                    <td>{contrato.nombrecontratista}</td>
                                    <td>{contrato.objeto}</td>
                                    <td>{contrato.valorcontrato}</td>
                                </tr>
                                <tr className='noSearch hide'>
                                    <td colSpan="4"></td>
                                </tr>
                                </tbody>
                            )
                    }
                    )
                }
                </table>
        </div>
        )

    }

export default Contratos

