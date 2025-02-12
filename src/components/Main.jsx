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

export default function Main(){
    // Destrutturazione della variabile 
    const {movies}= useAppDataContext()
    const {tv} = useAppDataContext()

    const getFlagUrl = (language) => {
        return flagMapping[language] || 
        'https://th.bing.com/th/id/R.15d698f4f3a348f6f791b4afdf4f15c3?rik=SqNXXK6Qucu45g&pid=ImgRaw&r=0';
        
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
                                    <h4>Voto: {movie.vote_average}</h4>
                                </li>
                            </ul>
                        </li>
                    ))}
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
                                    <h4>Voto: {serie.vote_average}</h4>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>

            </div>
        </main>
    )
}