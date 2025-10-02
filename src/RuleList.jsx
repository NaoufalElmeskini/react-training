// NPM dependencies
import {useContext} from "react";

// local dependencies
import {RoleContext} from "./RoleContext";
import Rule from "./Rule";

/**
 * Display list of rules.
 */
const RuleList = ({ rules }) => {
    const { role } = useContext(RoleContext);

    const isAdmin = role === "admin";

    const displayedRules = isAdmin
        ? rules
        : rules.filter((rule) => rule.status === "validated");

    return (
        <div>
            {displayedRules.map((rule) => (
                <Rule key={rule.id} rule={rule} isStatusVisible={isAdmin} />
            ))}
        </div>
    );
};

export default RuleList;