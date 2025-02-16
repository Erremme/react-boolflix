import { useState , useEffect } from "react";
import axios from "axios";
//context
import { useAppDataContext } from "../context/AppDataContext"
//component
import CardComponent from "./CardComponent";





export default function Main(){
    // Destrutturazione della variabile per i film cercati
    const {movies}= useAppDataContext()
    // Destrutturazione della variabile per le serietv cercate
    const {tv} = useAppDataContext()
    //Destrutturazione della viabile per le img dei film cercati
    const {dataImgMovies} = useAppDataContext()
    //Destrutturazione della viabile per le img delle serie tv cercate
    const {dataImgTv}= useAppDataContext()
    //Dichiarazione variabile di stato per i film piu visti
    const [dataMostViewed , setDataMostViewed] = useState([])
    //Dichiarazione variabile di stato per le immagini deifilm piu visti
    const [dataImgMostViewed , setDataImgMostViewed] = useState()

    const getFlagUrl = (language) => {
        return flagMapping[language] || 
        'https://th.bing.com/th/id/R.15d698f4f3a348f6f791b4afdf4f15c3?rik=SqNXXK6Qucu45g&pid=ImgRaw&r=0';
        
    }

    const getVote = (vote) => {
        
        return stars[vote.toFixed(0) /2] || voteNull
    }

    const fetchMovies = () => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=322507440c7b48e5e2f7336329b6461a")
        .then((res) => { 
            setDataMostViewed(res.data.results)
            const arrayImgMostViewed = res.data.results.map((item) => (item.backdrop_path))
              setDataImgMostViewed(arrayImgMostViewed)
        })
    }

    useEffect(fetchMovies , [])

    
    

    
    const getImageUrl = (index, img) => {
        
        const src =`https://image.tmdb.org/t/p/w500/${img[index]}`
        
        return src;

        }

    
    return (
    
            <main className="bg-neutral-600 min-h-screen">
            <div className="container mx-w-xl mx-auto">
                <h1 className="text-center text-2xl font-bold text-white">I PIU VISTI</h1>
                <div className="grid grid-cols-12 gap-3 ">
                    {dataMostViewed.map((film, index) =>{
                        const src = getImageUrl(index, dataImgMostViewed)
                        return(
                        <CardComponent key={film.id} 
                        src ={src}
                        item ={film}
                         getFlagUrl= {getFlagUrl} 
                         getVote = {getVote}
                         
                        
                        />
                        )
                    })}
                    
                </div>
            </div>

            <div className="container mx-w-xl mx-auto">
                <h1 className="text-center text-2xl font-bold text-white">FILM</h1>
                <div className="grid grid-cols-12 gap-3 ">
                    {movies.map((movie, index) =>{
                        const src = getImageUrl(index, dataImgMovies)
                        return(
                        <CardComponent key={movie.id} 
                        src ={src}
                        item ={movie}
                         getFlagUrl= {getFlagUrl} 
                         getVote = {getVote}
                         
                        
                        />
                        )
                    })}
                    
                </div>
            </div>
            
           
            <div className="container mx-w-xl mx-auto">
                <h1 className="text-center text-2xl font-bold text-white">SERIE TV</h1>
                <div className="grid grid-cols-12 gap-3 ">
                    {tv.map((serie, index) =>{
                        const src = getImageUrl(index, dataImgTv)
                        return(
                        <CardComponent key={serie.id} 
                        src ={src}
                        item ={serie}
                         getFlagUrl= {getFlagUrl} 
                         getVote = {getVote}
                         
                        
                        />
                        )
                    })}
                    
                </div>
            </div>
        </main>
    )
}
                   
