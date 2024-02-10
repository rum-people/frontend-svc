import Header from "./components/app-header/header";
import {useState} from "react";
import Body from "./components/body/body";

function App() {
    const [term, setTerm] = useState("");
    const [period, setPeriod] = useState("");

    const handleTermChange = (events) => {
        setTerm(events.target.value);
    }


    return (
        <div>
            <Header term={term}
                    handleTermChange={handleTermChange}/>
            <Body/>
        </div>
    );
}

export default App;
