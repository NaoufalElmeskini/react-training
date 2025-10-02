import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {dislikeRule, likeRule} from '../services/rules-bonus.store';

function UiCountBtn({ icon, onClick, count }) {
    return (
        <button type="button" onClick={onClick} className="border p-4" title="+1">
            {count} <FontAwesomeIcon icon={icon} />
        </button>
    );
}

function LikeBtn({ count, ruleId }) {
    const dispatch = useDispatch();
    const onClick = () => dispatch(likeRule(ruleId));
    return <UiCountBtn icon={faThumbsUp} count={count} onClick={onClick} />;
}
function DislikeBtn({ count, ruleId }) {
    const dispatch = useDispatch();
    const onClick = () => dispatch(dislikeRule(ruleId));
    return <UiCountBtn icon={faThumbsDown} count={count} onClick={onClick} />;
}

export { LikeBtn, DislikeBtn };