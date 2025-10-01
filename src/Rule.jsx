// NPM dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown, faPencil, faThumbsDown, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";

/**
 * Display a single rule.
 */
function Rule({ rule }) {
    const [folded , setFolded] = useState(false);
    const clickHAndler = () => {
        setFolded(!folded)
    }

    return (
        <section className="m-16 mt-4 cursor-pointer">
            <header className="bg-blue-400 text-3xl p-4 text-white flex justify-between items-center" onClick={clickHAndler}>
                {rule.title} <FontAwesomeIcon icon={folded ? faChevronUp: faChevronDown} className="m-4" />
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
                        <button type="button" className="border p-4" title="+1">
                            {rule.likes} <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        <button type="button" className="border p-4" title="+1">
                            {rule.dislikes} <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Rule;