import SearchBar from "./SearchBar"
export default function Header(){
 

    return (
    <div className="flex justify-between bg-black p-4 content-end">
    <div className="h-12">
        <img className="w-full h-full" src="/img/fontbolt.png" alt="logo boolflix" />
    </div>
    <SearchBar />
    </div>
)

    
}