import { createContext , useContext, useState} from "react";


//Creo il context
const AppDataContext = createContext()
//Creo un pezzo di stato


//Funzione che mi consente di esportare il context
function AppdataProvider({children}){
    const [movies , setMovies]= useState([])
    return(
        <AppDataContext.Provider value={{movies , setMovies}}>
            {children}
        </AppDataContext.Provider>
    )
}

//Funzione che mi consente di expostare il context gia usato
function useAppDataContext(){
    const context = useContext(AppDataContext)
    return context;
}

//Esporto
export {AppdataProvider , useAppDataContext}