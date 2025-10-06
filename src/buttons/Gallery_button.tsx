import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function GalleryButton(){
    const navigate = useNavigate();
    return (
        <button className="button" onClick={()=>navigate(`/`)}><FontAwesomeIcon className="icon" icon={faGrip}></FontAwesomeIcon>Gallery</button>
    )
}
export default GalleryButton;