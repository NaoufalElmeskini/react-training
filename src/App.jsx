import './App.css'
import {RuleList} from "./RuleList.jsx";
import data from "./data.json";

function App() {
    return (
        <RuleList rules={data}/>
    );
}

export default App