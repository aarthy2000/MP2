import { RenderItem } from './RenderItem';
import type { Artwork } from './model';
import { useAppContext } from './AppContextProvider';
import { useEffect } from 'react';
import { call_artworks_get } from './util/api_caller';
import { useNavigate } from 'react-router-dom';

function List(){
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
       setIds(artworks.map((item: Artwork) => String(item.id)));
    },[artworks, setIds])
    
    return (
    <div>
    <button onClick={() => navigate(`/`)}>Back to Gallery</button>
    
    <div className ="list-grid">
        <div className="list-row">
            <p className='list-item'>Id</p>
            <p className='list-item'>Title</p>
            <p className='list-item'>Artist</p>
            <p className='list-item'>Medium</p>
        </div>
      {artworks.map((artwork: Artwork) => (
        <RenderItem key={artwork.id} artwork={artwork} listView={true} />
      ))}
    </div>
    </div>
  );
}


export default List;