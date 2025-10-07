
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function ListButton(){
    const navigate = useNavigate();
    return (
        <button className="button" onClick={()=>navigate(`/list`)}><FontAwesomeIcon className="icon" icon={faList}></FontAwesomeIcon>List View</button>
    )
}
export default ListButton;