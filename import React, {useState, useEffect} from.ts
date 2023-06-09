import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/boostrap.min.css';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

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

        </tbody>
      </table>
    </div>
  );
}

export default App;