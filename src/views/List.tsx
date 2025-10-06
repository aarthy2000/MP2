import { RenderItem } from '../util/RenderItem';
import type { Artwork } from '../util/model';
import { useAppContext } from '../util/AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from '../util/api_caller';
import GalleryButton from '../buttons/Gallery_button';

function List(){
    const {allArtWorks, setDetailView, setIds, setArtworks, artworks, api_path, setPrevLink, setNextLink, setAllArtworks} = useAppContext();
    useEffect(()=>{
       async function fetchData() {
        const response = await call_artworks_get(api_path);
        if (allArtWorks.length === 0) {
        setArtworks(response.artworks);
        setAllArtworks(response.artworks);
        setNextLink(response.next_link);
        setPrevLink(response.prev_link);
        }
        setDetailView(false);

      }
      fetchData();
      
    },[setArtworks, setDetailView, api_path, setPrevLink, setNextLink, allArtWorks.length, setAllArtworks])

    useEffect(()=>{
       setIds(artworks.map((item: Artwork) => String(item.id)));
    },[artworks, setIds])
    
    return (
    <div>
    <GalleryButton/>
    
    <div className ="list-grid">
       
      <li>
         
      {artworks.map((artwork: Artwork) => (
        <ul>
          <RenderItem key={artwork.id} artwork={artwork} listView={true} />
        </ul>
        
      ))}
      </li>
      
    </div>
    </div>
  );
}


export default List;