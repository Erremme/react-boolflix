//context
import { useAppDataContext } from "../context/AppDataContext"
//component



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
    const {dataImgTv}= useAppDataContext()

    const getFlagUrl = (language) => {
        return flagMapping[language] || 
        'https://th.bing.com/th/id/R.15d698f4f3a348f6f791b4afdf4f15c3?rik=SqNXXK6Qucu45g&pid=ImgRaw&r=0';
        
    }

    const getVote = (vote) => {
        
        return stars[vote.toFixed(0) /2] || voteNull
    }

    
    return (
    
            <main className="bg-neutral-600">
            <div className="container mx-w-xl mx-auto">
                <h1>Lista dei film</h1>
                <div className="grid grid-cols-12 gap-3 ">
                    {movies.map((movie, index) => (
                        <div key={movie.id} className="col-span-2 relative border-white  border-2">
                            <div className="bg-white shadow-lg  h-70">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${dataImgMovies[index]}`}
                                    alt="foto"
                                    className="w-full h-full object-cover transition-opacity duration-500 opacity-100 aspect-video "
                                />
                            </div>
                            <div className="absolute inset-0 bg-black text-white opacity-0 transition-opacity duration-500 hover:opacity-100 overflow-scroll  ">
                                <ul className="p-2 space-y-2 text-sm">
                                    <li><span className="font-bold">Titolo:</span> {movie.title}</li>
                                    <li><span className="font-bold">Titolo originale:</span> {movie.original_title}</li>
                                    <li className="flex items-center">
                                        <span className="font-bold">Lingua originale:</span>
                                        <img
                                            src={getFlagUrl(movie.original_language)}
                                            alt={`Bandiera di ${movie.original_language}`}
                                            style={{ width: '30px', height: '15px' }}
                                        />
                                    </li>
                                    <li><span className="font-bold">Voto:</span> {getVote(movie.vote_average)}</li>
                                    <li><span className="font-bold">Trama:</span> {movie.overview}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
           
            <div className="container mx-w-xl mx-auto">
                <h1>Lista delle serie tv</h1>
                <div className="grid grid-cols-12 gap-3">
                    {tv.map((serie, index) => (
                        <div key={serie.id} className="col-span-2 relative h-70 border-2 border-white">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${dataImgTv[index]}`}
                                    alt="foto"
                                    className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black text-white opacity-0 transition-opacity duration-500 hover:opacity-100 overflow-scroll ">
                                <ul className="p-2 space-y-2 text-sm">
                                    <li><span className="font-bold">Titolo:</span> {serie.name}</li>
                                    <li><span className="font-bold">Titolo originale:</span> {serie.original_name}</li>
                                    <li className="flex items-center">
                                        <span className="font-bold">Lingua originale:</span>
                                        <img
                                            src={getFlagUrl(serie.original_language)}
                                            alt={`Bandiera di ${serie.original_language}`}
                                            style={{ width: '30px', height: '15px' }}
                                        />
                                    </li>
                                    <li><span className="font-bold">Voto:</span> {getVote(serie.vote_average)}</li>
                                    <li><span className="font-bold">Trama:</span> {serie.overview}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
                   
