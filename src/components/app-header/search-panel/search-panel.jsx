import "./search-panel.css"
import messages from "../../utils/messages";

const SearchPanel = ({term, handleTermChange}) => {
    return (
        <>
            <input type="text"
                   className="form-control"
                   placeholder={messages.search_panel_input}
                   value={term}
                   onChange={handleTermChange}/>
        </>
    );
};

export default SearchPanel;