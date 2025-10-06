import { RenderItem } from './RenderItem';
import type { Artwork } from './model';
import { useAppContext } from './AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from './util/api_caller';
import { useNavigate } from 'react-router-dom';

function List(){
    const {allArtWorks, setDetailView, setIds, setArtworks, artworks, api_path, setPrevLink, setNextLink, setAllArtworks} = useAppContext();
    const navigate = useNavigate();
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
      
    },[setArtworks, setDetailView, api_path, setPrevLink, setNextLink])

    useEffect(()=>{
       setIds(artworks.map((item: Artwork) => String(item.id)));
    },[artworks, setIds])
    
    return (
    <div>
    <button onClick={() => navigate(`/`)}>Back to Gallery</button>
    
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