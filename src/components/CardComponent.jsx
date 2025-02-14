export default function CardComponent({ children , src, alt}){
    return(
        <div className="relative col-span-3 h-100 bg-white shadow-lg rounded-lg overflow-hidden" >
            <img 
            src={src} 
            alt= {alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100"
         />
         {children}
        </div>
    )
} 