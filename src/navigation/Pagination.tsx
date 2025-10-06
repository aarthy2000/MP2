import { useAppContext } from '../util/AppContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
function Pagination(){
    const {prevLink, nextLink,setApi_path, detailView} = useAppContext();
    return (
        <>
        {
        !detailView && (
        <div className="pagination-div">
            <button className="pagination" disabled={prevLink==null} onClick={()=> setApi_path(prevLink)}><FontAwesomeIcon icon={faCaretLeft} />
</button>
            <button className="pagination"disabled={nextLink==null} onClick={()=> setApi_path(nextLink)}><FontAwesomeIcon icon={faCaretRight} /></button>
        </div>
        )
    }
        </>
        
        
    )
}
export default Pagination;