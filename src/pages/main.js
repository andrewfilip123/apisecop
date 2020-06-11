import React, { useEffect, useState } from 'react'
import Opciones from '../Inicio/opciones/opcionesInicio'
import Contratos from '../Inicio/contratos/listaContratos'



const MainSECOP = () => {

    const [contratosData, setContratosData] = useState([]);

        const getContratos = async () => {
            const response = await fetch('http://localhost:3000/api/contrato/listar');
            const responseJSON = await response.json();
            console.log({ responseJSON })
            setContratosData(responseJSON.data);
        }

        useEffect(() => {
            getContratos();
        }, []);

        return (
            <div>
                <Opciones />
                <hr />
                <Contratos contratos={contratosData} />
            </div>
        )
    }


export default MainSECOP