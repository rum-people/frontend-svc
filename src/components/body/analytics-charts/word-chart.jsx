import React, {useEffect, useState} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import 'chartjs-adapter-date-fns';
import AnalyticService from "../../../services/AnalyticService";
import dayjs from "dayjs";


Chart.register(...registerables);

const MentionChart = ({term, period, selectedSources}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                // todo MOCK
                // setData(mentGeneral);
                const response = await AnalyticService.getTopKeywordsForWord(period, selectedSources, term);
                setData(response.data)
                console.log("MentionChart response data ", data)
            } catch (error) {
                console.error('Error fetching sentimental data:', error);
            }
        }

        fetchData();
    }, [term, period, selectedSources]);

    function getChartData() {
        const dateFormat = 'YYYY/MM/DD HH:mm:ss'

        const frequencies = data.map(item => item.frequency);
        return {
            labels: data.map(item => dayjs(item.timestamp, dateFormat).format('YYYY-MM-DD')),
            datasets: [{
                label: 'Frequency',
                data: frequencies,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            }]
        };
    }

    function getChartOptions() {
        return {
            scales: {
                y: {
                    min: 0,
                    title: {
                        display: false,
                        text: 'Frequency'
                    }
                },
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                    }
                }
            },
        };
    }

    function getChart() {
        if (data.length === 1) {
            return <Bar data={getChartData()} options={getChartOptions()}/>
        } else {
            return <Line data={getChartData()} options={getChartOptions()}/>
        }
    }

    return (
        data.length > 0 ? getChart() : <></>
    );
};

export default MentionChart;
