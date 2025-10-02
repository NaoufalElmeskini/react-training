// local dependencies
import Rule from "./Rule";
import {useContext} from "react";
import {RoleContext} from "./RoleContext.jsx";

/**
 * Display list of rules.
 */
export const RuleList = ({rules}) => {
    const role = useContext(RoleContext);
    return (
        <>
            {
                role === "admin" ?
                    rules.map((rule) => <Rule key={rule.id} rule={rule} />):
                    rules.filter(rule => rule.status === 'validated')
                        .map((rule) => <Rule key={rule.id} rule={rule} />)
            }
        </>
    );
}