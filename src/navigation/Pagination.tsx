import { useAppContext } from '../util/AppContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
function Pagination(){
    const {prevLink, nextLink,setApi_path, detailView} = useAppContext();
    const changeApiPath = (link: any):void => {

        setApi_path(link);
    }
    return (
        <>
        {
        !detailView && (
        <div className="pagination-div">
            <button className="pagination" disabled={prevLink==null} onClick={()=> changeApiPath(prevLink)}><FontAwesomeIcon icon={faCaretLeft} />
</button>
            <button className="pagination"disabled={nextLink==null} onClick={()=> changeApiPath(nextLink)}><FontAwesomeIcon icon={faCaretRight} /></button>
        </div>
        )
    }
        </>
        
        
    )
}
export default Pagination;