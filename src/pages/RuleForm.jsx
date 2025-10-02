import {useParams} from "react-router-dom";

const RuleForm = () => {
    const params = useParams();

    console.log('params.id: ' + params.id);
    return (
        <>
            <h1>RuleForm #{params.id}</h1>
            <input className="border m-4 p-4 shadow-lg"/>
        </>
    )
}
export default RuleForm;