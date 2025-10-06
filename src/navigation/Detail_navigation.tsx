import { useNavigate } from "react-router-dom";
import { useAppContext } from "../util/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
function DetailNavigation(){
    const {ids, currentId} = useAppContext();
    const navigate = useNavigate();
    
    const index = ids.indexOf(currentId?? -1);
    
    return(
        <div className="navigation">
            <button className="button" disabled={index<=0 } onClick={() => navigate(`/artwork/${ids[index-1]}`)}><FontAwesomeIcon className="icon" icon={faCaretLeft} /></button>
            <button className="button" disabled={index===-1 || index>=ids.length-1} onClick={() => navigate(`/artwork/${ids[index+1]}`)}><FontAwesomeIcon className="icon" icon={faCaretRight} /></button>
        </div>
    )
    
    
}

export default DetailNavigation;