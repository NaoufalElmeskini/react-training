// NPM dependencies
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp, faPencil,} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

// local dependencies
import {DislikeBtn, LikeBtn} from './LikeBtn';

/**
 * Display a single rule.
 */
function Rule({ rule }) {
    const [folded, setFolded] = useState(false);
    return (
        <section className="m-16 mt-4 cursor-pointer">
            <header
                className="bg-blue-400 text-3xl p-4 text-white flex justify-between items-center"
                role="presentation"
                onClick={() => setFolded(!folded)}
            >
                {rule.title}{' '}
                {folded ? (
                    <FontAwesomeIcon icon={faChevronDown} className="m-4" />
                ) : (
                    <FontAwesomeIcon icon={faChevronUp} className="m-4" />
                )}
            </header>
            {folded ? null : (
                <>
                    <p className="p-4 text-2xl">{rule.description}</p>
                    <footer className="flex justify-between items-center p-4 border">
                        <div>
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
                            <NavLink to={`/edit/${rule.id}`}>
                                <button
                                    type="button"
                                    className="bg-blue-400 p-4 rounded text-2xl"
                                    title="Update"
                                >
                                    <FontAwesomeIcon icon={faPencil} />
                                </button>
                            </NavLink>
                            <div className="flex">
                                <LikeBtn count={rule.likes} ruleId={rule.id} />
                                <DislikeBtn count={rule.dislikes} ruleId={rule.id} />
                            </div>
                        </div>
                    </footer>
                </>
            )}
        </section>
    );
}

export default Rule;