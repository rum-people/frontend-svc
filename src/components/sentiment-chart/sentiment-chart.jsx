import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const SentimentChart = ({data}) => {
    let datum = data[0];
    console.log(datum)
    const chartData = {
        labels: data.map(item => item.date), datasets: datum.emotions.map((emotion, index) => ({
            label: emotion.label,
            data: data.map(item => item.emotions[index].score),
            fill: true,
            backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
            borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
            tension: 0.1,
            responsive: true,
            maintainAspectRatio: false
        }))
    };

    const chartOptions = {
        scales: {
            y: {
                min: 0,
                max: 1,
                stacked: true
            },
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    stepSize: 2
                },
            }
        }
    };

    return (<Line data={chartData} options={chartOptions}/>);
};

export default SentimentChart;
