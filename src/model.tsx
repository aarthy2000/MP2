export interface Artwork{
    id: string;
    title: string;
    artist: string;
    imageId: string;
    imagePath: string;
    api_link: string;
    medium: string,
    artwork_type_title: string,
    category_titles: string[],
}

export interface DetailView{
    artwork: Artwork;
    date_start: string,
    date_end: string,
    dimensions: string
}