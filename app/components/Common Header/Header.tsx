import TopBar from "./TopBar";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="w-full sticky top-0 z-30">
        <SearchBar />
      </div>
    </>
  );
}
