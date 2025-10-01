import './App.css'
import {RuleList} from "./RuleList.jsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = () => fetch('/data.json')
            .then((res) => res.json())
            .then(d => setData(d))
        setTimeout(fetchData, 3000)
    }, [data]);

    return (
        data.length === 0 ?
            <FontAwesomeIcon icon={faSpinner} /> :
            <RuleList rules={data}/>
    );
}

export default App