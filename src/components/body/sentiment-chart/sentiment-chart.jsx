import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import 'chartjs-adapter-date-fns';
import AnalyticService from "../../../services/AnalyticService";
import dayjs from "dayjs";

Chart.register(...registerables);

const SentimentChart = ({term, period, selectedSources}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                // todo: update when period is changed
                if (term === "") {
                    const response = await AnalyticService.getSentimentAnalysisGeneral(period, selectedSources);
                    setData(response.data)
                } else {
                    const response = await AnalyticService.getSentimentAnalysisForWord(period, selectedSources, term);
                    setData(response.data)
                }
            } catch (error) {
                console.error('Error fetching sentimental data:', error);
            }
        }

        fetchData();
    }, [term, period, selectedSources]);

    function getChartData() {
        if (!data || data.length === 0) {
            return {};
        }
        const dateFormat = 'YYYY/MM/DD HH:mm:ss'

        const allEmotions = Array.from(new Set(data.flatMap(item => item.emotions.map(emotion => emotion.label))));
        return {
            labels: data.map(item => dayjs(item.timestamp, dateFormat).format('YYYY-MM-DD')),
            datasets: allEmotions.map(emotionLabel => {
                const emotionValues = data.map(item => {
                    const emotion = item.emotions.find(emotion => emotion.label === emotionLabel);
                    return emotion ? emotion.frequency : 0;
                });

                return {
                    label: emotionLabel,
                    data: emotionValues,
                    fill: true,
                    backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                    borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
                    tension: 0.1,
                    responsive: true,
                    maintainAspectRatio: false
                };
            })
        };
    }

    function getChartOptions() {
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
        data.length > 0 ? <Line data={getChartData()} options={getChartOptions()}/> : <></>
    );
};

export default SentimentChart;
