import TopBar from "./TopBar";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header(){
    return(
        <div>
            <TopBar />
            <NavBar />
            <SearchBar />       
        </div>
    );
}