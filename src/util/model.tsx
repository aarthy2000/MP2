export interface Artwork{
    id: string;
    title: string;
    artist: string;
    imageId: string;
    imagePath: string;
    api_link: string;
    medium: string,
    artwork_type_title: string,
    has_not_been_viewed_much: boolean,
    is_public_domain: boolean,
    has_multimedia_resources: boolean,
    is_on_view: boolean,
    date_start: string,
    date_end: string,
}


export interface Artwork_list{
    prev_link: string | null;
    next_link: string | null;
    artworks: Artwork[];

}