import { useAppContext } from "./AppContextProvider";

function Pagination(){
    const {prevLink, nextLink,setApi_path, detailView} = useAppContext();
    return (
        <>
        {
        !detailView && (
        <div>
            <button disabled={prevLink==null} onClick={()=> setApi_path(prevLink)}>Previous</button>
            <button disabled={nextLink==null} onClick={()=> setApi_path(nextLink)}>Next</button>
        </div>
        )
    }
        </>
        
        
    )
}
export default Pagination;