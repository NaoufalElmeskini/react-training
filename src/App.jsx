import './App.css'
import {RuleList} from "./RuleList.jsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {RoleContext} from "./RoleContext.jsx";
import Header from "./Header.jsx";

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = () => fetch('/data.json')
            .then((res) => res.json())
            .then(d => setData(d))
        setTimeout(fetchData, 1000)
    }, []);

    return (
        data.length === 0 ?
            <FontAwesomeIcon icon={faSpinner}/> :
            <RoleContext.Provider value={"admin"}>
                <Header></Header>
                <RuleList rules={data}/>
            </RoleContext.Provider>

    );
}

export default App