import Dropdown from 'react-bootstrap/Dropdown'
import React, {useState} from "react";
import './time-chooser.css';

function TimeChooser({handlePeriodChange}) {
    const [selectedPeriod, setSelectedPeriod] = useState(7);

    const handleSelect = (value) => {
        setSelectedPeriod(value);
        handlePeriodChange(value);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="primary" className="time-chooser-toggle">
                Last {selectedPeriod} days
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey={1} className="time-chooser-item">Last 1 day</Dropdown.Item>
                <Dropdown.Item eventKey={7} className="time-chooser-item">Last 7 days</Dropdown.Item>
                <Dropdown.Item eventKey={30} className="time-chooser-item">Last 30 days</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default TimeChooser;