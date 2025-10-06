import { useState } from "react";
import { useAppContext } from "../util/AppContextProvider";
import { call_artworks_search } from "../util/api_caller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
function Search(){
    const [data, setData] = useState("");
    const {detailView, setArtworks, setAllArtworks} = useAppContext();

    async function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
            const results = await call_artworks_search(data);
            setArtworks(results.artworks); 
            setAllArtworks(results.artworks);
    }
   
    return (
         <>
        {
           
            !detailView && (
                <div className="search-div">
           <input className="chip" type="text" placeholder="Search" value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleSearch}></input> 
           <FontAwesomeIcon className="clear-button" onClick={()=>setData("")} icon={faCircleXmark}></FontAwesomeIcon>
           </div>
            )
        }
        </>
    )
        
}

export default Search;

