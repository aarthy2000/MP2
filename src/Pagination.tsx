import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContextProvider";

function Pagination(){
    const {ids, currentId} = useAppContext();
    const navigate = useNavigate();
    
    const index = ids.indexOf(currentId?? -1);
    console.log("current index: ",ids, currentId, index, typeof(ids[0]));
    return(
        <div className="navigation">
            <button disabled={index<=0 } onClick={() => navigate(`/artwork/${ids[index-1]}`)}>Previous</button>
            <button disabled={index===-1 || index>=ids.length-1} onClick={() => navigate(`/artwork/${ids[index+1]}`)}>Next</button>
        </div>
    )
    
    
}

export default Pagination;