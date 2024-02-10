import React from "react";
import {Form} from "react-bootstrap";
import "./source-chooser.css"

function SourceItem({value, label, handleCheckboxChange}) {
    return (
        <Form.Check
            className="source-item"
            type="checkbox"
            label={label}
            value={value}
            onChange={handleCheckboxChange}
        />
    );
}

export default SourceItem;