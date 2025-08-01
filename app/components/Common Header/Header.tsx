import TopBar from "./TopBar";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header(){
    return(
        <header className="w-full">
            <TopBar />
            <NavBar />
            <SearchBar />       
        </header>
    );
}