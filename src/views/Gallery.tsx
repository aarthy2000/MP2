import { RenderItem } from '../util/RenderItem';
import type { Artwork } from '../util/model';
import { useAppContext } from '../util/AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from '../util/api_caller';
import ListButton from '../buttons/List_button';

function Gallery(){
    const {setDetailView, setIds, setArtworks, artworks, api_path, setPrevLink, setNextLink, setAllArtworks, allArtWorks} = useAppContext();
    useEffect(()=>{
       async function fetchData() {
        const response = await call_artworks_get(api_path);
        if (allArtWorks.length === 0) {
        setArtworks(response.artworks);
        setAllArtworks(response.artworks);
        setPrevLink(response.prev_link);
        setNextLink(response.next_link);
        }
        setDetailView(false);
      }
      fetchData();
    },[setArtworks, setDetailView, api_path, setNextLink, setPrevLink, setAllArtworks, allArtWorks.length])

    useEffect(()=>{
      setIds(artworks.map((item: Artwork) => String(item.id)));
    },[artworks, setIds, setAllArtworks])
    

    return (
      <div>
        <ListButton/>
    <div className ="grid">
      {artworks.map((artwork: Artwork) => (
        <RenderItem key={artwork.id} artwork={artwork} listView={false}/>
      ))}
    </div>
      </div>
    
  );
}


export default Gallery;