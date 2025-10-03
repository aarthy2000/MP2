import { useNavigate } from "react-router-dom";
import { Artwork } from "./model";
export function RenderItem({ artwork }: { artwork: Artwork }){
    const navigate = useNavigate();
    return (
        <div>
            <img className="galleryImage" src={artwork.imagePath} onClick={() => navigate(`/artwork/${artwork.id}`)}></img>
        </div>
        
    )
}