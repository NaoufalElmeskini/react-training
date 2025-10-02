// NPM dependencies
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faPencil,} from '@fortawesome/free-solid-svg-icons';
import {useContext, useState} from "react";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";
import LikeBtn from "./LikeBtn.jsx";
import DisikeBtn from "./DisikeBtn.jsx";
import {RoleContext} from "./RoleContext.jsx";

/**
 * Display a single rule.
 */
function Rule({ rule }) {
    const [folded , setFolded] = useState(false);
    const foldClicker = () => {
        setFolded(!folded)
    }
    const role = useContext(RoleContext);
    console.log('role: ' + role)
    const showRuleStatus = () => {
        return role === 'admin' ? '( ' +  rule.status + ' )' : '';
    }

    return (
        <section className="m-16 mt-4 cursor-pointer">
            <header className="bg-blue-400 text-3xl p-4 text-white flex justify-between items-center" onClick={foldClicker}>
                {showRuleStatus()} {rule.title} <FontAwesomeIcon icon={folded ? faChevronUp: faChevronDown} className="m-4" />
            </header>
            <p className="p-4 text-2xl" hidden = {folded} >{rule.description}</p>
            <footer className="flex justify-between items-center p-4 border" hidden = {folded} >
                <div>
                    {rule.tags.map(
                        (tag) => <span key={tag} className="p-4 bg-gray-400 rounded text-white text-2xl mx-4">{tag}</span>,
                    )}
                </div>
                <div className="flex justify-end">
                    <button type="button" className="bg-blue-400 p-4 rounded text-2xl" title="Update">
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <div className="flex">
                        <LikeBtn count={rule.likes}/>
                        <DisikeBtn count={rule.dislikes}/>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Rule;