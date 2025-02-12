import { useAppDataContext } from "../context/AppDataContext"
import SearchBar from "./SearchBar"

export default function Main(){
    const {movies}= useAppDataContext()

    return (
        <main>
            <div>
                <SearchBar />
                <h1>Lista dei film</h1>
            </div>
            <div>
                <ul >
                    {movies.map((movie) => {
                        return (
                            <li key={movie.id}>
                               <h3> Titolo : {movie.title}</h3>
                            <ul>
                                <li><h4> Titolo originale: {movie.original_title}</h4></li>
                                <li><h4> Lingua originale: {movie.original_language}</h4></li>
                                <li><h4> Voto: {movie.vote_average}</h4></li>


                            </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}