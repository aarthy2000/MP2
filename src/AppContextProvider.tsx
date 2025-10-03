import { createContext, useContext, useState } from "react";
import { Artwork } from "./model";

const AppContext = createContext<any>(null);

export function AppContextProvider({children}: {children: React.ReactNode}) {
    const [detailView, setDetailView] = useState<boolean>(false);
    const [ids, setIds] = useState<string[]>([]);
    const [currentId, setCurrentId] = useState<string | null>(null);
    const [artworks, setArtworks] = useState<Artwork[]>([]);

    return (
        <AppContext.Provider value= {{detailView, setDetailView, ids, setIds, currentId, setCurrentId, artworks, setArtworks}}>
            {children}
        </AppContext.Provider>
    )

}
export function useAppContext(){
    return useContext(AppContext);
}