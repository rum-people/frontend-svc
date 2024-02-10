import Header from "./components/app-header/header";
import {useState} from "react";
import Body from "./components/body/body";

function App() {
    const [term, setTerm] = useState("");
    const [period, setPeriod] = useState("");
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
            <Header term={term}
                    handleTermChange={handleTermChange}
                    period={period}
                    handlePeriodChange={handlePeriodChange}
                    handleSelectedSources={handleSelectedSources}
            />
            <Body/>
        </div>
    );
}

export default App;
