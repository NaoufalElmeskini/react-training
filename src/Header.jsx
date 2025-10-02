import {useContext} from "react";
import {RoleContext} from "./RoleContext";
import {LangContext} from "./LangContext";

const Header = () => {
    const { role, setRole } = useContext(RoleContext);
    const { lang, setLang } = useContext(LangContext);
    const changeRole = () => {
        setRole(role === "user" ? "admin" : "user");
    };
    const changeLang = () => {
        setLang(lang === "english" ? "français" : "english");
    };
    return (
        <header className="flex items-center justify-around p-4">
            <h1 className="text-4xl">
                {lang === "english" ? "CS Rules" : "Règles de l'informatique"} ({role})
            </h1>
            <button className="rounded bg-blue-200 p-4" onClick={changeRole}>
                Change role
            </button>
            <button className="rounded bg-red-200 p-4" onClick={changeLang}>
                {lang}
            </button>
        </header>
    );
};

export default Header;