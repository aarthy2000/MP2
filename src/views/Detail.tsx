import { useParams } from "react-router-dom";
import { get_specific_artwork } from "../util/api_caller";
import { useAppContext } from "../util/AppContextProvider";
import DetailNavigation from "../navigation/Detail_navigation";
import { Artwork } from "../util/model";
import GalleryButton from "../buttons/Gallery_button";
import ListButton from "../buttons/List_button";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCalendar, faFileAudio, faCopyright, faBrush, faLayerGroup, faPalette, faUserPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
function Icon({icon}:{icon: IconProp}){
    return (
        <FontAwesomeIcon icon={icon} className="icon"></FontAwesomeIcon>
    )
}
function Detail(){
    const [artworkDetail, setArtworkDetail] = useState<Artwork>();
    const { id } = useParams();
    const { setDetailView, setCurrentId} = useAppContext();

    useEffect(() => {
        get_specific_artwork(id as string).then(response =>{
            setArtworkDetail(response);
        });
        
        setDetailView(true);
        setCurrentId(id);
    }, [id, setCurrentId, setDetailView]);
    const print_boolean = (flag: boolean): string => {
        return flag ? "Yes" : "No";
    }
    return (
        <div>
            <div className="return_to_main">
        <GalleryButton/>
            <ListButton/>
            </div>
            
            
        <div className="modal_container">
            {artworkDetail && (
                <>
                <img className="detail_image" src={artworkDetail.imagePath} alt={artworkDetail.title}></img>
                <div className="detail_content">
                    <h2 className="title">{artworkDetail.title}</h2>
                    <h3><Icon icon={faUserPen}/>Artist: {artworkDetail.artist}</h3>
                    <h4><Icon icon={faCalendar}/>Started on: {artworkDetail.date_start === "-1"?"N/A":artworkDetail.date_start}</h4>
                    <h4><Icon icon={faCalendar}/>Ended on:{artworkDetail.date_end === "-1"?"N/A":artworkDetail.date_end}</h4>
                    <h5><Icon icon={faPalette}/>Medium: {artworkDetail.medium}</h5>
                    <h5><Icon icon={faBrush}/>Artwork type: {artworkDetail.artwork_type_title}</h5>
                    <h5><Icon icon={faEye}/>Is on display: {print_boolean(artworkDetail.is_on_view)}</h5>
                    <h5><Icon icon={faStar}/>Is less viewed: {print_boolean(artworkDetail.has_not_been_viewed_much)}</h5>
                    <h5><Icon icon={faFileAudio}/>Has multimedia resources: {print_boolean(artworkDetail.has_multimedia_resources)}</h5>
                    <h5><Icon icon={faCopyright}/>Is Public domain: {print_boolean(artworkDetail.is_public_domain)}</h5>

                </div>
                </>
            )}
        </div>
        <DetailNavigation/>
        </div>

        
        
    )
}
export default Detail;