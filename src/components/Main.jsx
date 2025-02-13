//context
import { useAppDataContext } from "../context/AppDataContext"


//array con le immagini delle bandiere piu importanti
const flagMapping = {
    it: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg', 
    en: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg',
    fr: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg',
    de : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg',
    es : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg',
    
  };

  const stars = {

   1: [ 
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
    ],

    2 : [
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
    ],

    3:[
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
    ],

    4:[
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
    ],

    5:[
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
        <i className= "fa-solid fa-star"></i>,
    ]
  
  }

  const voteNull = 
        [
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>,
        <i className= "fa-regular fa-star"></i>
    ]
  

export default function Main(){
    // Destrutturazione della variabile 
    const {movies}= useAppDataContext()
    const {tv} = useAppDataContext()
    const {dataImgMovies} = useAppDataContext()
    console.log(dataImgMovies)
    const {dataImgTv}= useAppDataContext()

    const getFlagUrl = (language) => {
        return flagMapping[language] || 
        'https://th.bing.com/th/id/R.15d698f4f3a348f6f791b4afdf4f15c3?rik=SqNXXK6Qucu45g&pid=ImgRaw&r=0';
        
    }

    const getVote = (vote) => {
        
        return stars[vote.toFixed(0) / 2] || voteNull
    }

    
    return (
        <main>
            
            <div>
               <h1>Lista dei film</h1>
                <ul>
                    {movies.map((movie) => (
                        
                        <li key={movie.id}>
                            <h3>Titolo: {movie.title}</h3>
                            <ul>
                                <li>
                                    <h4>Titolo originale: {movie.original_title}</h4>
                                </li>
                                <li> 
                                    <span>Lingua originale :</span>  
                                    <img
                                        src={getFlagUrl(movie.original_language)}
                                        alt={`Bandiera di ${movie.original_language}`}
                                        style={{ width: '30px', height: '15px' }}
                                    />          
                                </li>
                                <li>
                                    <h4>Voto:{getVote(movie.vote_average)}</h4>
                                    

                                </li>
                                
                            </ul>
                        </li>
                        
                    ))}
                </ul>

                <ul>
                    {dataImgMovies.map((imagine, index) => {
                        return(
                            <li key={index}>
                                <img src={`https://image.tmdb.org/t/p/w500/${imagine}` } alt="" />
                            </li>
                        )
                    })}
                </ul>

            </div>

            <div>
               <h1>Lista delle serie tv</h1>
                <ul>
                    {tv.map((serie) => (
                        
                        <li key={serie.id}>
                            <h3>Titolo: {serie.name}</h3>
                            <ul>
                                <li>
                                    <h4>Titolo originale: {serie.original_name}</h4>
                                </li>
                                <li> 
                                    <span>Lingua originale :</span>  
                                    <img
                                        src={getFlagUrl(serie.original_language)}
                                        alt={`Bandiera di ${serie.original_language}`}
                                        style={{ width: '30px', height: '15px' }}
                                    />          
                                </li>
                                <li>
                                    <h4>Voto: {getVote(serie.vote_average)}</h4>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
                <ul>
                    {dataImgTv.map((imagine, index) => {
                        return(
                            <li key={index}>
                                <img src={`https://image.tmdb.org/t/p/w500/${imagine}` } alt="" />
                            </li>
                        )
                    })}
                </ul>

            </div>
        </main>
    )
}