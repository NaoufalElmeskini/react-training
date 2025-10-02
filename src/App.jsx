// NPM dependencies
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

// Local dependencies
import RuleList from "./RuleList";
import Header from "./Header";
import {RoleProvider} from "./RoleContext";
import {LangProvider} from "./LangContext";

const delay = (ms) => (data) =>
    new Promise((resolve) => setTimeout(() => resolve(data), ms));

/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */
function App() {
    const [rules, setRules] = useState(null);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then(delay(3000))
            .then((data) => setRules(data));
    }, []);

    return (
        <LangProvider>
            <RoleProvider>
                <Header />
                {rules ? (
                    <RuleList rules={rules} />
                ) : (
                    <FontAwesomeIcon
                        className="block m-auto text-6xl"
                        icon={faSpinner}
                        spin
                    />
                )}
            </RoleProvider>
        </LangProvider>
    );
}

export default App;