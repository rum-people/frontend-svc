import Header from "./components/app-header/header/header";
import {useState} from "react";
import Body from "./components/body/body";

function App() {
    const [term, setTerm] = useState("");
    const [period, setPeriod] = useState(7);
    const [selectedSources, setSelectedSources] = useState([]);

    const handleTermChange = (events) => {
        setTerm(events.target.value);
    }

    const handlePeriodChange = (value) => {
        setPeriod(value);
    };

    const handleSelectedSources = (value) => {
        setSelectedSources(value);
    }

    return (
        <div>
            <Header
                handleTermChange={handleTermChange}
                handlePeriodChange={handlePeriodChange}
                selectedSources={selectedSources}
                handleSelectedSources={handleSelectedSources}
            />
            <Body
                term={term}
                period={period}
                selectedSources={selectedSources}
            />
        </div>
    );
}

export default App;
