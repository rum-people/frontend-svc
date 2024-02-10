import "./search-panel.css"
import messages from "../../utils/messages";
import {useState} from "react";

const SearchPanel = ({handleTermChange}) => {
    const [tempTerm, setTempTerm] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleTermChange(event);
        }
    };

    const handleChange = (event) => {
        setTempTerm(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder={messages.search_panel_input}
                value={tempTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </>
    );
};

export default SearchPanel;