import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';

function BarChartData({ chartData }) {

    return ( 
    <div className="BarChartData">
    <Bar data={chartData} ></Bar>
    </div>
    );
}

export default BarChartData;