// NPM dependencies
import {useEffect} from "react";

// Local dependencies
import RuleList from "./pages/RuleList.jsx";
import {RoleProvider} from "./services/RoleContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import RuleForm from "./pages/RuleForm.jsx";
import {addRules, getRules} from "./services/rules.store.js";
import {useDispatch, useSelector} from "react-redux";


/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */
function App() {

    const dispatch = useDispatch()
    const rules = useSelector(
        getRules
    )

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then(data => dispatch(addRules(data)));
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