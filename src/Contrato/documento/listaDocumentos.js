import React, { useState, useEffect } from "react";
import "./elemento-documento.css";
import axios from 'axios';

const Documentos = (props) => {
  const documentoSeleccionados = props.documentos
  const [documentosPrecon] = useState([]);
  const [documentosCon] = useState([]);

  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose file');
  const [uploadedFile, setUploadedFile]= useState({});

  const fileHandlerChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
        
    }

    const onSubmit = async e =>{
       e.preventDefault();
       const formData= new FormData();
       formData.append('file', file);
       try{
           const res = await axios.post('http://localhost:3000/api/contrato/guardarDocumentos', formData, {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }
           });
        const { filename, filePath} = res.data;
        setUploadedFile({filename,filePath});
       }catch(err){
           if(err.response.status === 500){
               console.log ('Problema con el servidor');

           }else{
               console.log(err.response.data.msg)
           }

       }
   }
   
useEffect(()=>{
  props.documentos.map((documento) => {
    if (documento.proceso === "Precontractual") {
      documentosPrecon.push(documento);
    } else if (documento.proceso === "Contractual") {
      documentosCon.push(documento);
    }
  });
})




  return (
    <div className="documentos">
      
        <h1>Precontractual</h1>

        {documentosPrecon.map((precon, index) => {
          return (
            <div key={index}>
              <form onSubmit={onSubmit}>
              <label>{precon.descripcion}<input type="file" onChange={(e)=>fileHandlerChange(e)}/></label>
              <input type="submit" value="Guardar" />
              </form>
            </div>
          );
        })}
        <h1>Contractual</h1>
        {documentosCon.map((con, index) => {
          return (
            <div  key={index}>
              <form onSubmit={onSubmit}>
              <label>{con.descripcion}<input type="file" onChange={(e)=>fileHandlerChange(e)}/></label>
              <input type="submit" value="Guardar" />
              </form>
            </div>
          );
        })}


        <div className="documentos-medidor">
          <h3>Medidor de documentos adjuntos</h3>
          <meter min="0" max="100" low="25" high="75" optimum="100" value="5" />
        </div>
      
    </div>
  );
};

export default Documentos;
