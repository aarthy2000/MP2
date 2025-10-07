import { useEffect, useState } from "react";
import { useAppContext } from "../util/AppContextProvider";
import { Artwork } from "../util/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFilter } from "@fortawesome/free-solid-svg-icons";
function FilterResults() {
  const { setArtworks, allArtWorks } = useAppContext(); 
  const [searchText, setSearchText] = useState<string>("");

  useEffect( () =>{

        const query = searchText.toLowerCase();
        
        const results = allArtWorks.filter((artwork: Artwork)=>{
            return(
                artwork.title?.toLowerCase().includes(query) ||
                 artwork.artist?.toLowerCase().includes(query) ||
                   artwork.artwork_type_title?.toLowerCase().includes(query)
            )
        })

        setArtworks(results); 
    },[searchText, setArtworks, allArtWorks])

    return (
        <div className="search-div">
                <input className="chip" type="text" placeholder="Filter within results" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input> 
                <FontAwesomeIcon className="clear-button" onClick={()=>setSearchText("")} icon={faCircleXmark}></FontAwesomeIcon>
                </div>
    )
}

export default FilterResults;
