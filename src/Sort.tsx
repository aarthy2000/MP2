import { useEffect, useState } from "react";
import { useAppContext } from "./AppContextProvider";
import { Artwork } from "./model";

function Sort(){
    const {artworks, setArtworks} = useAppContext();
    const [sort, setSort] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("asc");

    useEffect(()=>{
        const sorted = [...artworks];
        const weight = sortOrder === "asc" ? 1: -1;
        if(sort === "artist"){
            sorted.sort((a: Artwork,b:Artwork) => weight*a.artist.localeCompare(b.artist))
        }
        else if(sort === "title"){
            sorted.sort((a: Artwork,b:Artwork) => weight*a.title.localeCompare(b.title))
        }
        
       setArtworks(sorted);
       console.log("sorted artworks");
    },[sort, sortOrder])
    return (
        <div>
           <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="">--Sort by--</option>
                <option value="artist">Artist</option>
                <option value="title">Title</option>
            </select>

            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} defaultValue={sortOrder}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    )
}

export default Sort;