import { useState } from "react";
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

  

    //funzione che fa la chiamata axios 
    const handleSearch = (e) =>{
        //Blocco in submit del campo input
        e.preventDefault()
        //Faccio la richiesta axios
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params :{
               api_key :"322507440c7b48e5e2f7336329b6461a",
                query: search,
            }
        })
        .then((res) => {
            setMovies(res.data.results);
        })
        .catch((error) => {
            console.error("Errore nella fetch della prima richiesta" , error);
        })
        axios.get("https://api.themoviedb.org/3/search/tv", {
            params:{
                api_key :"322507440c7b48e5e2f7336329b6461a",
                query: search,
            }
        })
        .then((res) => {
            setTv(res.data.results)
        })
    }


    

    return(
       <form onSubmit={handleSearch}>
         <label htmlFor="search">Cerca il tuo film</label>
        <input 
            type="search" 
            id = "search"
            placeholder="Cerca.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button  type=" submit">Cerca</button>
       </form>
    )

}