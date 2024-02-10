import React from "react";
import "./sentiment_message.css"

const SentimentMessage = () => {

    return (
        <>
            <h2 className="info-title">Sentiment Analytics</h2>
            <ul className="emotions-list">
                <li className="emotion-item">
                    <span className="emotion-icon">🙁</span>
                    <span className="emotion-name">Sadness:</span>
                    <span className="emotion-description">опис</span>
                </li>
                <li className="emotion-item">
                    <span className="emotion-icon">😊</span>
                    <span className="emotion-name">Joy:</span>
                    <span className="emotion-description">опис</span>
                </li>
                <li className="emotion-item">
                    <span className="emotion-icon">❤️</span>
                    <span className="emotion-name">Love:</span>
                    <span className="emotion-description">опис</span>
                </li>
                <li className="emotion-item">
                    <span className="emotion-icon">😠</span>
                    <span className="emotion-name">Anger:</span>
                    <span className="emotion-description">опис</span>
                </li>
                <li className="emotion-item">
                    <span className="emotion-icon">😨</span>
                    <span className="emotion-name">Fear:</span>
                    <span className="emotion-description">опис</span>
                </li>
                <li className="emotion-item">
                    <span className="emotion-icon">😮</span>
                    <span className="emotion-name">Surprise:</span>
                    <span className="emotion-description">опис</span>
                </li>
            </ul>
        </>
    )
};

export default SentimentMessage;