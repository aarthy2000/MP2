import { RenderItem } from '../util/RenderItem';
import type { Artwork } from '../util/model';
import { useAppContext } from '../util/AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from '../util/api_caller';
import GalleryButton from '../buttons/Gallery_button';

function List(){
    const {allArtWorks, setDetailView, setIds, setArtworks, artworks, api_path, setPrevLink, setNextLink, setAllArtworks} = useAppContext();
    
    useEffect(()=>{
      async function fetchData(){
        console.log("Lis ")
        const response = await call_artworks_get(api_path);
        setArtworks(response.artworks);
        setAllArtworks(response.artworks);
        setPrevLink(response.prev_link);
        setNextLink(response.next_link);
      }
       async function fillGallery() {
        if(allArtWorks.length===0){
          await fetchData()
        }
        }
        fillGallery();
        setDetailView(false);
    },[setDetailView, setArtworks, api_path, setNextLink, setPrevLink, setAllArtworks, allArtWorks.length])

    useEffect(()=>{
      setIds(artworks.map((item: Artwork) => String(item.id)));
    },[artworks, setIds, setAllArtworks])
    
    useEffect(()=>{
      async function fetchData(){
        const response = await call_artworks_get(api_path);
        setArtworks(response.artworks);
        setAllArtworks(response.artworks);
        setPrevLink(response.prev_link);
        setNextLink(response.next_link);
      }
      async function movePage(){
        await fetchData();
      }
      movePage();
      setDetailView(false);
    },[setDetailView, api_path, setPrevLink, setNextLink, setAllArtworks, setArtworks])

    
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