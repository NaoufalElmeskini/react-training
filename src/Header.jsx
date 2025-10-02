import {useContext} from "react";
import {RoleContext} from "./RoleContext.jsx";

const Header = () => {
    const {role, setRole} = useContext(RoleContext);
    const changeRole = () => {
        setRole(role === 'admin' ?
            'user':
            'admin'
        );
    }

    return <header className="flex items-center justify-around p-4">
        <h1 className="text-4xl">CS Rules</h1>
        <button className="rounded bg-blue-200 p-4" onClick={changeRole}>Change role</button>
    </header>
}
export default Header;
