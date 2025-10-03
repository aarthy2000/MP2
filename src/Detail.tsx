import { useNavigate, useParams } from "react-router-dom";
import { get_specific_artwork } from "./util/api_caller";
import { DetailView } from "./model";
import { useEffect, useState } from "react";
import { useAppContext } from "./AppContextProvider";

function Detail(){
    const [artworkDetail, setArtworkDetail] = useState<DetailView>();
    const { id } = useParams();
    const { setDetailView, setCurrentId} = useAppContext();
    const navigate = useNavigate();
    useEffect(() => {
        get_specific_artwork(id as string).then(response =>{
            setArtworkDetail(response);
        });
        setDetailView(true);
        setCurrentId(id);
    }, [id]);
    
    return (
        <div>
            <button onClick={()=>navigate(`/`)}>Back to Main view</button>
        <div className="modal_container">
            {artworkDetail && (
                <>
                <img className="detail_image" src={artworkDetail.artwork.imagePath}></img>
                <div className="detail_content">
                    <h1>{artworkDetail.artwork.title}</h1>
                    <h2>Artist: {artworkDetail.artwork.artist}</h2>
                    <h3>Date start: {artworkDetail.date_start}</h3>
                    <h3>Date end:{artworkDetail.date_end}</h3>
                  
                </div>
                </>
            )}
        </div>
        </div>
        
        
    )
}
export default Detail;