<ul className="absolute inset-0   bg-gray-900 text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
                    {movies.map((movie) => {
                           return(
                        
                        <li key={movie.id} className="col-span-3 bg-black text-white p-2  h-100" >
                            
                            <ul className="space-y-2">
                                <li><span className="font-bold">Titolo:</span> {movie.title}</li>
                                <li>
                                    <span className="font-bold">Titolo originale:</span> {movie.original_title} </li>
                                <li className="flex items-center"> 
                                    <span className="font-bold">Lingua originale :</span>  
                                    <img
                                        src={getFlagUrl(movie.original_language)}
                                        alt={`Bandiera di ${movie.original_language}`}
                                        style={{ width: '30px', height: '15px' }}
                                    />          
                                </li>
                                <li>
                                    <span className="font-bold">Voto:</span>{movie.vote_average} </li>

                                <li><span className="font-bold">Trama:</span> {movie.overview}</li>
                                
                            </ul>
                        </li>
                    
                    )})}
                </ul>