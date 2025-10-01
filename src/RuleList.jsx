import rules from './data.json';

export const RuleList = () => {
    // const rules = ["rule 1", "rule 2", "rule 3"];

    return (
        <div>
            {
                rules.map(rule =>
                    <div>{rule.description}</div>
                )}
        </div>
    )
}
