import { useState, useEffect} from "react";
import axios from "axios";
//context
import { useAppDataContext } from "../context/AppDataContext"


export default function SearchBar(){
    //Variabile di stato di stato  per il valore dinamico del campo input
    const[search , setSearch] = useState("");
    //Variabile di stato per i film  estratta dal context
    const {movies ,setMovies} = useAppDataContext()
    //Variabile di stato per le serie tv  estratta dal context
    const {tv , setTv} = useAppDataContext()
    //Variabile di stato per le immagini di copertina  estratta dal context
    const {dataImgMovies, setDataImgMovies} = useAppDataContext()
    const {dataImgTv , setDataImgTv} = useAppDataContext()


  

    //funzione che fa la chiamata axios 
    const handleSearch = (e) =>{
        //Blocco in submit del campo input
        e.preventDefault()
        //Faccio la richiesta axios
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params :{
               api_key :"322507440c7b48e5e2f7336329b6461a",
                query: search,
                language :"it-IT",


            }
        })
        .then((res) => {
            setMovies(res.data.results);
            const arrayImgFilm = res.data.results.map((item) => (item.backdrop_path))
            setDataImgMovies(arrayImgFilm)
            
    })
          
            
        
        .catch((error) => {
            console.error("Errore nella fetch della prima richiesta" , error);
        })
        axios.get("https://api.themoviedb.org/3/search/tv", {
            params:{
                api_key :"322507440c7b48e5e2f7336329b6461a",
                query: search,
                language :"it-IT",
            }
        })
        .then((res, ) => {
            setTv(res.data.results)
           const arrayImgTv = res.data.results.map((item) => (item.backdrop_path))
              setDataImgTv(arrayImgTv)
                
                 
            
              
        })
        .catch((error) => {
            console.error("Errore nella fetch della seconda richiesta" , error);
        })
        
    }     
       

        
            
            
            
        
            
            




        

        

      
    
  

    

    return(
       <form className="space-x-1.5 " onSubmit={handleSearch}>
         <label htmlFor="search">Cerca il tuo film</label>
        <input 
             className=" px-4"
            type="search" 
            id = "search"
            placeholder="Cerca.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button  className="bg-white rounded-md px-1" type=" submit">Cerca</button>
       </form>
    )

}