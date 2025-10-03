import { RenderItem } from './RenderItem';
import type { Artwork } from './model';
import { useAppContext } from './AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from './util/api_caller';
import { useNavigate } from 'react-router-dom';

function Gallery(){
    const {setDetailView, setIds, setArtworks, artworks} = useAppContext();
    const navigate = useNavigate();
    useEffect(()=>{
       async function fetchData() {
        const response = await call_artworks_get("https://api.artic.edu/api/v1/artworks");
        setArtworks(response);
        setDetailView(false);
      }
      fetchData();
    },[setArtworks, setDetailView])

    useEffect(()=>{
      console.log("rtworks changed");
       setIds(artworks.map((item: Artwork) => String(item.id)));
    },[artworks, setIds])
    

    return (
      <div>
    <button onClick={() => navigate(`/list`)}>List View</button>
    <div className ="grid">
      {artworks.map((artwork: Artwork) => (
        <RenderItem key={artwork.id} artwork={artwork} listView={false}/>
      ))}
    </div>
      </div>
    
  );
}


export default Gallery;