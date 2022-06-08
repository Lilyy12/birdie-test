import React, { useState } from "react";
import '../styles/Dashboard.css';
import Axios from 'axios';
import {Link, useLocation} from 'react-router-dom' 

function Dashboard() {

  const [carer_id, setCarer_id] = useState();
  const [individualList, setIndividualList] = useState([]);

  const getIndividual = () => {
    Axios.get("http://localhost:3001/api/get/summary", {
      //send body value to backend 
      carer_id: carer_id
    }).then((response) => {
      console.log("query success!");
      //console.log(response.data);
      setIndividualList(response.data);
    });
  }
  
  return (
    <div className='Dashboard'>
      <h2>Enter carer id to see more detail:</h2>
      <input type ="text" onChange={(event) => {
          setCarer_id(event.target.value);}} 
           />
      <button onClick={getIndividual}>Enter</button>

      <div className='table'>
        <h2>Carer ID: df50cac5-293c-490d-a06c-ee26796f850d</h2>
        <center>
        <table>
          <tr>
            <th>Event</th>
            <th>Density</th>
            <th>Action</th>
          </tr>
          {individualList.map((val) => {
      
            return (<tr>
                <td>{val.event_type}</td>
                <td>{val.counter}</td>
                <td><button><Link to="/payload">Click to see Payload</Link></button></td>
                </tr>)
            })}
        </table>
        </center>
      </div>
    </div>
  )
}

export default Dashboard