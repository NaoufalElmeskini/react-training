// NPM dependencies
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp, faPencil,} from "@fortawesome/free-solid-svg-icons";
// import './Rule.css'; // Import the CSS file for styles
// local dependencies
import {DislikeBtn, LikeBtn} from "./LikeBtn.jsx";
import {useNavigate} from "react-router-dom";

/**
 * Display a single rule.
 */
function Rule({ rule, isStatusVisible }) {
    const [folded, setFolded] = useState(false);
    const navigate = useNavigate();


    return (
        <section className="m-16 mt-4 cursor-pointer">
            <header
                className="bg-blue-400 text-3xl p-4 text-white flex justify-between items-center"
                role="presentation"
                onClick={() => setFolded(!folded)}
            >
                {rule.title}{" "}
                <FontAwesomeIcon
                    icon={folded ? faChevronDown : faChevronUp}
                    className="m-4"
                />
            </header>
            {rule.description && !folded && (
                <p className="p-4 text-2xl">{rule.description}</p>
            )}
            <footer
                className={`flex justify-between items-center p-4 border ${
                    folded ? "hidden" : ""
                }`}>
                <div>
                    {isStatusVisible && (
                        <span className="p-4 bg-gray-400 rounded text-white text-2xl mx-4">
              {rule.status}
            </span>
                    )}
                    {rule.tags.map((tag) => (
                        <span
                            key={tag}
                            className="p-4 bg-gray-400 rounded text-white text-2xl mx-4"
                        >
              {tag}
            </span>
                    ))}
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-blue-400 p-4 rounded text-2xl"
                        title="Update"
                        onClick={() => navigate('/edit/' + rule.id)}
                    >
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <div className="flex">
                        <LikeBtn defaultCount={rule.likes} />
                        <DislikeBtn defaultCount={rule.dislikes} />
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Rule;