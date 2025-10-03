import { Link, useNavigate } from "react-router-dom";
import { Artwork } from "./model";
export function RenderItem(props: { artwork: Artwork; listView: boolean}){
    const navigate = useNavigate();
    return (
        <div>
            {
            !props.listView && (
                <img className="galleryImage" src={props.artwork.imagePath} alt={props.artwork.title} onClick={() => navigate(`/artwork/${props.artwork.id}`)}></img>
            )
            }
            {
            props.listView && (
                <div className="list-row">
                <p className="list-item">{props.artwork.id}</p>
                <p className="list-item">{props.artwork.title}</p>
                <p className="list-item">{props.artwork.artist}</p>
                <p className="list-item">{props.artwork.medium}</p>
                <Link className="list-item" to={`/artwork/${props.artwork.id}`}>Details</Link>
                </div>
                
            )
            }
            </div>
        
    )
}