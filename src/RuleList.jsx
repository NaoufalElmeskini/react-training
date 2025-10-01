// local dependencies
import Rule from "./Rule";

/**
 * Display list of rules.
 */
export const RuleList = ({ rules }) => {
    return (
        <>
            {rules.map(function (rule) {
                return <Rule key={rule.id} rule={rule} />;
            })}
        </>
    );
}