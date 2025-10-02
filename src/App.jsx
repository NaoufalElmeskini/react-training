// NPM dependencies
import {useEffect, useState} from "react";

// Local dependencies
import RuleList from "./pages/RuleList.jsx";
import {RoleProvider} from "./services/RoleContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import RuleForm from "./pages/RuleForm.jsx";

const delay = (ms) => (data) =>
    new Promise((resolve) => setTimeout(() => resolve(data), ms));

/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */
function App() {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setRules(data));
    }, []);

    return (
        <RoleProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Layout />}>
                        <Route path="/new" element={<RuleForm />}/>
                        <Route path="/edit/:id" element={<RuleForm />}/>
                        <Route path="/" element={<RuleList rules={rules}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </RoleProvider>
    );
}

export default App;