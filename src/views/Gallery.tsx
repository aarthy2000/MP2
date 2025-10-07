import { RenderItem } from '../util/RenderItem';
import type { Artwork } from '../util/model';
import { useAppContext } from '../util/AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from '../util/api_caller';
import ListButton from '../buttons/List_button';
import Search from '../buttons/Search';

function Gallery(){
    const {setDetailView, setIds, setArtworks, artworks, api_path,setPrevLink, setNextLink, setAllArtworks, allArtWorks} = useAppContext();
    
    useEffect(()=>{
       async function fillGallery() {
        async function fetchData(){
        const response = await call_artworks_get(api_path);
        setArtworks(response.artworks);
        setAllArtworks(response.artworks);
        setPrevLink(response.prev_link);
        setNextLink(response.next_link);
      }
        if(allArtWorks.length===0){
          await fetchData()
        }
        }
        fillGallery();
        setDetailView(false);
    },[setDetailView, allArtWorks.length, api_path,setAllArtworks,setArtworks,setNextLink,setPrevLink])

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
    },[api_path, setPrevLink, setNextLink, setAllArtworks, setArtworks, setDetailView])

    return (
      <div>
        <Search/>
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