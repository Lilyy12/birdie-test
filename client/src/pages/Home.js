import React, { useEffect, useState } from 'react';
import '../styles/App.css'
import Axios from 'axios';

function Home() {

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((response) => {
          setEventList(response.data);
      });
  }, []);

  

  return ( 
  <div className="App"> 
  <center>
  
  <h1>All possible events</h1>
  <table className="table">
      <tr>
        <th>Event Name</th>
        <th>Density</th>
      </tr>
  

  {eventList.map((val) => {
      
      return (<tr>
          <td>{val.event_type}</td>
          <td>{val.counter}</td>
          </tr>)
  })}
  </table>
  </center>
  </div>
  );
}

export default Home;