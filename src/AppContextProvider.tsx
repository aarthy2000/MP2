import { createContext, useContext, useState } from "react";
import { Artwork } from "./model";
const AppContext = createContext<any>(null);

export function AppContextProvider({children}: {children: React.ReactNode}) {
    const [detailView, setDetailView] = useState<boolean>(false);
    const [ids, setIds] = useState<string[]>([]);
    const [currentId, setCurrentId] = useState<string | null>(null);
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [api_path, setApi_path] = useState<string>("https://api.artic.edu/api/v1/artworks");
    const [prevLink, setPrevLink] = useState<string | null>(null);
    const [nextLink, setNextLink] = useState<string | null>(null);
    const [allArtWorks, setAllArtworks] = useState<Artwork[]>([]);

    return (

        <AppContext.Provider value= {{detailView, setDetailView, ids, setIds, currentId, setCurrentId, artworks, setArtworks,api_path, setApi_path, prevLink, setPrevLink, nextLink, setNextLink, allArtWorks, setAllArtworks}}>
            {children}
        </AppContext.Provider>
    )

}
export function useAppContext(){
    return useContext(AppContext);
}