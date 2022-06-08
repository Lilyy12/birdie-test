import React, { useEffect, useState } from 'react';
import BarChartData from '../components/BarChartData';
import Axios from 'axios';


function DisplayChart() {

    const [topFiveList, setTopFiveList] = useState([]);
    //const topEvent = topFiveList.map((val) => val.event_type);

    
    useEffect(() => {
        Axios.get('http://localhost:3001/api/get/top5').then((response) => {
            setTopFiveList(response.data);
        });
    },[]);

    const [chartData, setChartData] = useState({
        
        labels: ['task_completed','no_medication_observation_received','alert_raised','regular_medication_taken', 'fluid_intake_observation'],
        //labels: topFiveList.map((data) => (data.event_type)),
        datasets: [{
            label: "Top 5 Events that has the most density",
            data: [1046,946,831,555,516],
           //data: topFiveList.map((data) => (data.counter)),
            backgroundColor: ["pink"]
        }]
    });

    return ( 

    <div className="DisplayChart">
    <center>
        <h1>BAR CHART: BIRDIE APPLICATION</h1>
        <div style={{ width: 700}}>
            <BarChartData chartData={chartData}/>
        </div>
    </center>
    </div>

  )
}

export default DisplayChart