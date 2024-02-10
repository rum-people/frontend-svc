import React from 'react';
import {FaNewspaper, FaQuestion, FaReddit, FaTwitter} from "react-icons/fa";
import "./post-card.css"

const PostCard = ({ title, text, link, emotions, source }) => {
    let SourceIcon;
    switch (source) {
        case 'Twitter':
            SourceIcon = FaTwitter;
            break;
        case 'Reddit':
            SourceIcon = FaReddit;
            break;
        case 'News':
            SourceIcon = FaNewspaper;
            break;
        default:
            SourceIcon = FaQuestion;
            break;
    }
    return (
        <div className="post-card white-rectangle-card">
            <div className="icon">
                {SourceIcon && <SourceIcon />}
            </div>
            <div className="post-content">
                <h3 className="post-title">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="link-dark">{title}</a>
                </h3>
                <text className="post-text">{text}</text>
            </div>
        </div>
    );
};

export default PostCard;