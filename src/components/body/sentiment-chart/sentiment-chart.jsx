import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import 'chartjs-adapter-date-fns';
import emotGeneral from "../emotions-general.json";
import AnalyticService from "../../../services/AnalyticService";

Chart.register(...registerables);

const SentimentChart = ({term, period, selectedSources}) => {
    const [data, setData] = useState();
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        async function fetchData() {
            try {
                console.log("Data term is = " + term)
                if (term === "") {
                    console.log(emotGeneral)
                    setData([emotGeneral]);
                    console.log("data after = " + data)
                    setChartData(getChartData())
                    setChartOptions(getChartOptions())

                } else {
                    const response = await AnalyticService.getSentimentAnalysis(period, selectedSources, term);
                    console.log("Received data:", response.data);
                    setData(response.data)
                    setChartData(getChartData())
                    setChartOptions(getChartOptions())
                }
            } catch (error) {
                console.error('Error fetching sentimental data:', error);
            }
        }

        fetchData();
    }, [term, period, selectedSources]);

    function getChartData() {
        console.log("ChartData = " + data)
        if (!data || data.length === 0) {
            return {}; // Return an empty object if data is undefined or empty
        }
        let datum = data[0];
        return {
            labels: data.map(item => item.date),
            datasets: datum.emotions.map((emotion, index) => ({
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
    }

    function getChartOptions() {
        console.log("ChartOptions = " + data)
        if (!data || data.length === 0) {
            return {}; // Return an empty object if data is undefined or empty
        }
        return {
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
    }

    return (
        data ? <> </> : <Line data={chartData} options={chartOptions}/>
    );
};

export default SentimentChart;
