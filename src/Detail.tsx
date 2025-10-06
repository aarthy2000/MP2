import { useNavigate, useParams } from "react-router-dom";
import { get_specific_artwork } from "./util/api_caller";
import { useEffect, useState } from "react";
import { useAppContext } from "./AppContextProvider";
import DetailNavigation from "./Detail_navigation";
import { Artwork } from "./model";

function Detail(){
    const [artworkDetail, setArtworkDetail] = useState<Artwork>();
    const { id } = useParams();
    const { setDetailView, setCurrentId} = useAppContext();
    const navigate = useNavigate();
    useEffect(() => {
        get_specific_artwork(id as string).then(response =>{
            setArtworkDetail(response);
        });
        setDetailView(true);
        setCurrentId(id);
    }, [id, setCurrentId, setDetailView]);
    
    return (
        <div>
            <button onClick={()=>navigate(`/`)}>Back to Gallery view</button>
            <button onClick={()=>navigate(`/list`)}>Back to List view</button>
        <div className="modal_container">
            {artworkDetail && (
                <>
                <img className="detail_image" src={artworkDetail.imagePath} alt={artworkDetail.title}></img>
                <div className="detail_content">
                    <h1>{artworkDetail.title}</h1>
                    <h2>Artist: {artworkDetail.artist}</h2>
                    <h3>Date start: {artworkDetail.date_start}</h3>
                    <h3>Date end:{artworkDetail.date_end}</h3>
                    <h3>Medium: {artworkDetail.medium}</h3>
                    <h3>Category: {artworkDetail.category_titles}</h3>
                    <h3>Artwork type: {artworkDetail.artwork_type_title}</h3>
                  
                </div>
                </>
            )}
        </div>
        <DetailNavigation/>
        </div>

        
        
    )
}
export default Detail;