import axios from 'axios';
import type { Artwork, Artwork_list } from './model';
import placeHolderImg from '../placeholder.webp';
export async function call_artworks_get(api_path: string){
    let artwork_list: Artwork_list = { prev_link: null, artworks: [], next_link: null};
    
    const response = await axios.get(api_path, {
      headers: {
        "AIC-User-Agent": "aarthy (aarthyk2@illinois.edu)",
      },
    });
    
    const base_image_url = response.data.config['iiif_url'];

    let data = response.data.data;
    let artworks = data.map((item:any) =>({
        id: item.id,
        title: item.title,
        imageId: item.image_id,
        artist: item.artist_title,
        imagePath: getImageUrl(item, base_image_url),
        medium: item.medium_display,
        artwork_type_title: item.artwork_type_title,
        category_titles: item.categeory_titles,
        is_on_view: item.is_on_view??true,
          is_public_domain: item.is_public_domain??true,
          has_multimedia_resources: item.has_multimedia_resources??true,
          has_not_been_viewed_much: item.has_not_been_viewed_much??true,
          date_start: item.date_start,
          date_end: item.date_end
    }));    
    artwork_list.artworks = artworks;
    artwork_list.next_link = response.data.pagination.next_url?? null;
    artwork_list.prev_link = response.data.pagination.prev_url?? null;
    return artwork_list;
}
function getImageUrl(item: any, base_path: string){
  if(item.image_id === null || item.image_id === undefined){
    return placeHolderImg;
  }
 let width = item['thumbnail']?.width;
  width = (typeof width === 'number' && width > 0) ? Math.min(width, 843) : 843;

  return `${base_path}/${item.image_id}/full/${width},/0/default.jpg`

  
}
export async function call_artworks_search(searchString: string){
    let artwork_list: Artwork_list = { prev_link: null, artworks: [], next_link: null};
    let response = await axios.get("https://api.artic.edu/api/v1/artworks/search?q="+searchString, {
      headers: {
        "AIC-User-Agent": "aarthy (aarthyk2@illinois.edu)",
      },
    });
    
    let ids = response.data.data.map((item: any) => item.id);
    
    

    response = await axios.get("https://api.artic.edu/api/v1/artworks?ids="+ids, {
      headers: {
        "AIC-User-Agent": "aarthy (aarthyk2@illinois.edu)",
      },
    });
    let base_image_url = response.data.config["iiif_url"];
    let data = response.data.data;
    artwork_list.artworks = data.map((item:any) =>({
        id: item.id,
        title: item.title,
        imageId: item.image_id,
        artist: item.artist_title,
        imagePath: getImageUrl(item, base_image_url),
        api_link: item.api_link,
       medium: item.medium_display,
        artwork_type_title: item.artwork_type_title,
        category_titles: item.categeory_titles,
        is_on_view: item.is_on_view??true,
          is_public_domain: item.is_public_domain??true,
          has_multimedia_resources: item.has_multimedia_resources??true,
          has_not_been_viewed_much: item.has_not_been_viewed_much??true,
          date_start: item.date_start,
          date_end: item.date_end
    }));

    return artwork_list;
}

export async function get_specific_artwork(id: string){
    const response = await axios.get("https://api.artic.edu/api/v1/artworks/"+id, {
      headers: {
        "AIC-User-Agent": "aarthy (aarthyk2@illinois.edu)",
      },
    });
    
    
    let base_image_url = response.data.config["iiif_url"];

    const item = response.data.data;
    let artwork_item: Artwork = {
          title: item.title,
          id: item.id,
          imageId: item.image_id,
          imagePath: getImageUrl(item, base_image_url),
          artist: item.artist_title,
          api_link: item.api_link,
          medium: item.medium_display,
          artwork_type_title: item.artwork_type_title,
          category_titles: item.category_titles,
          is_on_view: item.is_on_view??true,
          is_public_domain: item.is_public_domain??true,
          has_multimedia_resources: item.has_multimedia_resources??true,
          has_not_been_viewed_much: item.has_not_been_viewed_much??true,
          date_start: item.date_start,
        date_end: item.date_end,
        dimensions: item.category,

        };
    return artwork_item; 
}