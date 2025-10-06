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
                    <img id="thumbnail" className="listImage" src={props.artwork.imagePath} alt={props.artwork.title} onClick={() => navigate(`/artwork/${props.artwork.id}`)}></img>
                <div id="list-content">

                <Link id="title" className="list-item" to={`/artwork/${props.artwork.id}`}><h2>{props.artwork.title}</h2></Link>
                <p id="artist" className="list-item">{props.artwork.artist}</p>
                <p id="medium" className="list-item">{props.artwork.medium}</p>
                </div>
                </div>
                
            )
            }
            </div>
        
    )
}