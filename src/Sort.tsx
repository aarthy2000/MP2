import { useEffect, useState } from "react";
import { useAppContext } from "./AppContextProvider";
import { Artwork } from "./model";

function Sort(){
    const {setArtworks, detailView} = useAppContext();
    const [sort, setSort] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("asc");


    useEffect(()=>{
        const sortArtworks = (list: Artwork[]) => {
        const sorted = [...list];
        const weight = sortOrder === "asc" ? 1: -1;
        if(sort === "artist"){
            sorted.sort((a: Artwork,b:Artwork) => weight*a.artist.localeCompare(b.artist))
        }
        else if(sort === "title"){
            sorted.sort((a: Artwork,b:Artwork) => weight*a.title.localeCompare(b.title))
        }
        else if(sort === "medium"){
            sorted.sort((a:Artwork, b:Artwork) => weight*a.medium.localeCompare(b.medium));
        }
        return sorted;
        }

        setArtworks((prev: Artwork[]) => sortArtworks(prev));
    },[sort, sortOrder, setArtworks])

    return (
        <div>
        {
        !detailView && (
        <div>
           <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="">--Sort by--</option>
                <option value="artist">Artist</option>
                <option value="title">Title</option>
                <option value="medium">Medium</option>
            </select>

            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        )
        }
        </div>
    )
}

export default Sort;