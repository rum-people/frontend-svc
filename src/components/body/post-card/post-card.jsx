import React from 'react';
import {FaNewspaper, FaQuestion, FaReddit, FaTwitter} from "react-icons/fa";
import "./post-card.css"

const PostCard = ({title, text, link, emotion, source}) => {

    const renderSourceIcon = () => {
        switch (source) {
            case 'Twitter':
                return <FaTwitter/>;
            case 'Reddit':
                return <FaReddit/>;
            case 'News':
                return <FaNewspaper/>;
            default:
                return <FaQuestion/>;
        }
    }

    const renderEmoji = () => {
        switch (emotion) {
            case 'joy':
                return '😊';
            case 'sadness':
                return '🙁';
            case 'love':
                return '❤️';
            case 'anger':
                return '😠';
            case 'fear':
                return '😨';
            case 'surprise':
                return '😮';
            default:
                return '❓';
        }
    };

    return (
        <div className="post-card white-rectangle-card">
            <div className="icon">
                {renderSourceIcon()}
            </div>
            <div className="post-content">
                <h3 className="post-title">
                    <a href={link} className="link-dark">{title}</a>
                </h3>
                <text className="post-text">{text}</text>
            </div>
            <div className="emoji">
                <span role="img" aria-label="Emoji">{renderEmoji()}</span>
            </div>
        </div>
    );
};

export default PostCard;