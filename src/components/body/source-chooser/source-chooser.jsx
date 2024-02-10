import React, {useState} from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import {FaReddit, FaTwitter} from 'react-icons/fa';
import './source-chooser.css';
import SourceItem from "./source-item";

function SourceChooser({handleSelectedSources}) {
    const [selectedSources, setSelectedSources] = useState([]);

    const handleCheckboxChange = (event) => {
        const {value, checked} = event.target;
        if (checked) {
            setSelectedSources([...selectedSources, value]);
        } else {
            setSelectedSources(selectedSources.filter(source => source !== value));
        }
        handleSelectedSources(selectedSources);
    };

    return (
        <Form>
            <Row>
                <Col>
                    <SourceItem
                        value={"Twitter"}
                        label={<><FaTwitter size={24}/> Twitter</>}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </Col>
                <Col>
                    <SourceItem
                        value={"Reddit"}
                        label={<><FaReddit size={24}/> Reddit</>}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </Col>
            </Row>
        </Form>
    );
}

export default SourceChooser;