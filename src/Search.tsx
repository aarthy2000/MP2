import { useState } from "react";
import { useAppContext } from "./AppContextProvider";
import { call_artworks_search } from "./util/api_caller";
function Search(){
    const [data, setData] = useState("");
    const {detailView, setArtworks} = useAppContext();

    async function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === "Enter"){
            const results = await call_artworks_search(data);
            setArtworks(results); 
        } 
    }
   
    return (
        <div>
        {
            !detailView && (
           <input className="chip" type="text" placeholder="Search" value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleSearch}></input> 
            )
        }
        
        </div>
        )
}

export default Search;

