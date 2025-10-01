import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";


const LikeBtn = () => {
    const [likeCount , setLikeCount] = useState(0);


    const likeClicker = () => {
        setLikeCount(likeCount+1);
    }
    return (
        <button type="button" className="border p-4" title="+1" onClick={likeClicker}>
            {likeCount} <FontAwesomeIcon icon={faThumbsUp} />
        </button>
    )
}
export default LikeBtn;