import SearchBar from "./SearchBar"
export default function Header(){
 

    return (
    <div className="flex justify-between bg-black p-6 ">
    <h1>BoolFlix</h1>
    <SearchBar />
    </div>
)

    
}