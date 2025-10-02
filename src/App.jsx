// NPM dependencies
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// Local dependencies
import RuleList from "./pages/RuleList";
import {RoleProvider} from "./services/RoleContext";
import {addRules, getRules} from "./services/rules-bonus.store";
import RuleForm from "./pages/RuleForm";
import Layout from "./components/Layout.jsx";

const delay = (ms) => (data) =>
    new Promise((resolve) => setTimeout(() => resolve(data), ms));

/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */
function App() {
    const rules = useSelector(getRules);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            // .then(delay(3000))
            .then((data) => dispatch(addRules(data)));
    }, []);

    return (
        <RoleProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Layout />}>
                        <Route index element={<RuleList rules={rules} />} />
                        <Route path="/new" element={<RuleForm />} />
                        <Route path="/edit/:id" element={<RuleForm />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </RoleProvider>
    );
}

export default App;