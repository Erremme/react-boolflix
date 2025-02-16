 
 
 //array con le immagini delle bandiere piu importanti
 const flagMapping = {
    it: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg', 
    en: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg',
    fr: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg',
    de : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg',
    es : 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg',
    
  };

  //array con le stelle piene
  const stars = {

    1: [ 
         <i className= "fa-solid fa-star text-amber-300 "></i>,
         <i className= "fa-regular fa-star"></i>,
         <i className= "fa-regular fa-star"></i>,
         <i className= "fa-regular fa-star"></i>,
         <i className= "fa-regular fa-star"></i>,
     ],
 
     2 : [
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-regular fa-star"></i>,
         <i className= "fa-regular fa-star"></i>,
         <i className= "fa-regular fa-star"></i>,
     ],
 
     3:[
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-regular fa-star"></i>,
         <i className= "fa-regular fa-star"></i>,
     ],
 
     4:[
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-regular fa-star"></i>,
     ],
 
     5:[
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
         <i className= "fa-solid fa-star text-amber-300"></i>,
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

  

export default function CardComponent( { item , src}){
    
    const getFlagUrl = (language) => {
        return flagMapping[language] || 
        'https://th.bing.com/th/id/R.15d698f4f3a348f6f791b4afdf4f15c3?rik=SqNXXK6Qucu45g&pid=ImgRaw&r=0';
        
}

const getVote = (vote) => {
        
    return stars[vote.toFixed(0) /2] || voteNull
}


    return(
        <div className="col-span-2 relative h-70 border-2 border-white">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
            <img
                src={src}
                alt={item.title}
                className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
            />
        </div>
        <div className="absolute inset-0 bg-black text-white opacity-0 transition-opacity duration-500 hover:opacity-100 overflow-scroll ">
            <ul className="p-2 space-y-2 text-sm">
                <li><span className="font-bold">Titolo:</span> {item.title}</li>
                <li><span className="font-bold">Titolo originale:</span> {item.original_title}</li>
                <li className="flex items-center">
                    <span className="font-bold">Lingua originale:</span>
                    <img
                        src={getFlagUrl(item.original_language)}
                        alt={`Bandiera di ${item.original_language}`}
                        style={{ width: '30px', height: '15px' }}
                    />
                </li>
                <li><span className="font-bold">Voto:</span> {getVote(item.vote_average)}</li>
                <li><span className="font-bold">Trama:</span> {item.overview}</li>
            </ul>
        </div>
    </div>
    )
} 