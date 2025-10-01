import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";


const DislikeBtn = (props) => {
    const [dislikeCount , setDislikeCount] = useState(props.count);


    const dislikeClicker = () => {
        setDislikeCount(dislikeCount+1);
    }
    return (
        <button type="button" className="border p-4" title="+1" onClick={dislikeClicker}>
            {dislikeCount} <FontAwesomeIcon icon={faThumbsDown} />
        </button>
    )
}
export default DislikeBtn;