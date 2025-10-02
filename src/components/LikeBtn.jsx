import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

function UiCountBtn({ icon, onClick, count }) {
    return (
        <button type="button" onClick={onClick} className="border p-4" title="+1">
            {count} <FontAwesomeIcon icon={icon} />
        </button>
    );
}


function LikeBtn({ defaultCount = 0 }) {
    const [count, setCount] = useState(defaultCount);
    const onClick = () => setCount(count + 1);
    return (
        <UiCountBtn icon={faThumbsUp} count={count} onClick={onClick} />
    );
}

function DislikeBtn({ defaultCount = 0 }) {
    const [count, setCount] = useState(defaultCount);
    const onClick = () => setCount(count + 1);
    return (
        <UiCountBtn icon={faThumbsDown} count={count} onClick={onClick} />
    );
}

export { LikeBtn, DislikeBtn };