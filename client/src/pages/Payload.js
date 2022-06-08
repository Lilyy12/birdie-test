import React, { useState } from "react";
import Axios from 'axios';
import '../styles/Dashboard.css';

function Payload() {

  const [payloadList, setPayloadList] = useState([]);

  const getPayload = () => {
    Axios.get("http://localhost:3001/api/get/summary").then((response) => {
      console.log("query success!");
      //console.log(response.data);
      setPayloadList(response.data);
    });
  }

  return (
    <div>
      <center>
      <button onClick={getPayload}>Get payload</button>
      <table>
          <tr>
            <th>Payload</th>
          </tr>
          <tr>
              {payloadList.map((val) => {
                return (
                  <tr>{val.payload}</tr>
                )
              })}
          </tr>
      </table>
      </center>
    </div>
  )
}

export default Payload