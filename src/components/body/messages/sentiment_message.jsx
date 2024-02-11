import React from "react";
import "./sentiment_message.css"

const SentimentMessage = () => {

    return (
        <>
            <h2 className="info-title">Sentiment Analytics</h2>
            <ul className="emotions-list">
                <li className="emotion-item">
                    <span className="emotion-icon">🙁</span>
                    <span className="emotion-name">Sadness</span>
                </li>
                <text className="emotion-description">Sorrow, unhappiness, or grief often triggered by various life circumstances.</text>
                <li className="emotion-item">
                    <span className="emotion-icon">😊</span>
                    <span className="emotion-name">Joy</span>
                </li>
                <text className="emotion-description">Happiness, delight, and contentment, often arising from experiences of achievements.</text>
                <li className="emotion-item">
                    <span className="emotion-icon">❤️</span>
                    <span className="emotion-name">Love</span>
                </li>
                <text className="emotion-description">Care, and deep attachment, often accompanied by a strong sense of connection and empathy.</text>
                <li className="emotion-item">
                    <span className="emotion-icon">😠</span>
                    <span className="emotion-name">Anger</span>
                </li>
                <text className="emotion-description">Irritation and frustration, usually triggered by perceived threats or injustice.</text>
                <li className="emotion-item">
                    <span className="emotion-icon">😨</span>
                    <span className="emotion-name">Fear</span>
                </li>
                <text className="emotion-description">Sense of danger, anxiety, or apprehension, triggered by real or perceived threats.</text>
                <li className="emotion-item">
                    <span className="emotion-icon">😮</span>
                    <span className="emotion-name">Surprise</span>
                </li>
                <text className="emotion-description">Astonishment, disbelief, or amazement, typically occurring in response to unexpected events.</text>
            </ul>
        </>
    )
};

export default SentimentMessage;