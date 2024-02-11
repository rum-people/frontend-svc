import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import 'chartjs-adapter-date-fns';
import AnalyticService from "../../../services/AnalyticService";


Chart.register(...registerables);

const GeneralChart = ({term, period, selectedSources}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await AnalyticService.getTopKeywordsGeneral(period, selectedSources);
                setData(response.data)
                console.log("GeneralChart response data", data)
            } catch (error) {
                console.error('Error fetching sentimental data:', error);
            }
        }

        fetchData();
    }, [term, period, selectedSources]);

    function getChartData() {
        // Строим гистограмму для каждого слова, где значение - его frequency
        const labels = data.map(item => item.keyword);
        const frequencies = data.map(item => item.frequency);
        const backgroundColors = Array.from({length: labels.length}, () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`);
        return {
            labels: labels,
            datasets: [{
                label: 'Frequency',
                data: frequencies,
                backgroundColor: backgroundColors,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        };
    }

    function getChartOptions() {
        return {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Frequency'
                    }
                },
            }
        };
    }

    return (
        data.length > 0 ? <Bar data={getChartData()} options={getChartOptions()}/> : <></>
    );
};

export default GeneralChart;
