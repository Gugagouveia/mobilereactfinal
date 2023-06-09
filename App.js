import React, {useState, useEffect} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function App() {

  const baseUrl="https://localhost:44370/api/alunos";
  const [data, setData]=useState([]);

  const requestGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    requestGet();
  },[])


  return (
    <div className="App">
        <table className="table table-bordered" >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
        {data.map(aluno=>(
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className="btn btn-primary">Editar</button> {" "}
                <button className="btn btn-danger">Excluir</button>
              </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;