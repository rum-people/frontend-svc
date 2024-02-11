import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import {FaReddit, FaRegNewspaper} from 'react-icons/fa';
import './source-chooser.css';
import SourceItem from "./source-item";

function SourceChooser({selectedSources, handleSelectedSources}) {
    const handleCheckboxChange = (event) => {
        const {value, checked} = event.target;
        if (checked) {
            if (!selectedSources.includes(value)) {
                handleSelectedSources([...selectedSources, value]);
            }
        } else {
            handleSelectedSources(selectedSources.filter(source => source !== value));
        }
    };

    return (
        <Form>
            <Row>
                <Col>
                    <SourceItem
                        value={"Reddit"}
                        label={<><FaReddit size={24}/> Reddit</>}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </Col>
                <Col>
                    <SourceItem
                        value={"News"}
                        label={<><FaRegNewspaper size={24}/> News</>}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </Col>
            </Row>
        </Form>
    );
}

export default SourceChooser;