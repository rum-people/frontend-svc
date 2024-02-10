import React from 'react';
import './body.css';
import SentimentChart from "../sentiment-chart/sentiment-chart";
import data from './/example.json';

function Body() {
    return (
        <div className="main-block">
            <div className="row">
                <div className="graph-container white-rectangle">
                    <div className="graph-placeholder"></div>
                </div>
                <div className="other-info orange-rectangle">
                    <div className="">

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="other-info orange-rectangle">
                    <div className="">

                    </div>
                </div>
                <div className="graph-container white-rectangle">
                    <SentimentChart data={data}/>
                </div>
            </div>
        </div>
    );
}

export default Body;