import { RenderItem } from './RenderItem';
import type { Artwork } from './model';
import { useAppContext } from './AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from './util/api_caller';

function Gallery(){
    const {setDetailView, setIds, setArtworks, artworks} = useAppContext();
    
    useEffect(()=>{
      console.log("Gallery useEffect");
       async function fetchData() {
        const response = await call_artworks_get("https://api.artic.edu/api/v1/artworks");
        setArtworks(response);
        setDetailView(false);
      }
      fetchData();
      
    },[setArtworks, setDetailView])

    useEffect(()=>{
      console.log("umm changes ids",artworks);
       setIds(artworks.map((item: Artwork) => String(item.id)));
    },[artworks, setIds])
    
    return (
    <div className ="grid">
      {artworks.map((artwork: Artwork) => (
        <RenderItem key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}


export default Gallery;