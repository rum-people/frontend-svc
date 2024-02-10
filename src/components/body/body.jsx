import React from 'react';
import './body.css';
import SentimentChart from "../sentiment-chart/sentiment-chart";
import data from './/example.json';
import SentimentMessage from "./messages/sentiment_message";
import MentionMessage from "./messages/mentions_message";

function Body() {
    return (
        <div className="main-block">
            <div className="row">
                <div className="graph-container white-rectangle">
                    <div className="graph-placeholder"></div>
                </div>
                <div className="other-info orange-rectangle">
                    <MentionMessage/>
                </div>
            </div>

            <div className="row">
                <div className="other-info orange-rectangle">
                    <SentimentMessage/>
                </div>
                <div className="graph-container white-rectangle">
                    <SentimentChart data={data}/>
                </div>
            </div>

            <div className="row">
                ewewew
            </div>
        </div>
    );
}

export default Body;