import React from 'react';
import './header.css';
import SearchPanel from "./search-panel/search-panel";
import messages from "../utils/messages";
import TimeChooser from "./time-chooser/time-chooser";
import SourceChooser from "./source-chooser/source-chooser";

function Header({term, handleTermChange, period, handlePeriodChange, handleSelectedSources}) {
    return (
        <div className="app-header">
            <div className="tooltip-container">
                <div className="question-mark">?</div>
                <div className="tooltip">{messages.search_panel_hint}</div>
            </div>
            <div className="search-panel">
                <SearchPanel term={term}
                             handleTermChange={handleTermChange}
                />
            </div>
            <div className="time-chooser-div">
                <TimeChooser handlePeriodChange={handlePeriodChange}/>
            </div>
            <div className="source-chooser-div">
                <SourceChooser handleSelectedSources={handleSelectedSources}/>
            </div>
        </div>
    );
}

export default Header;
