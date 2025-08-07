import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-14 items-center gap-4 bg-[#1ABA1A] rounded-[10px] px-4 py-4">
      <div className="bg-white rounded-full w-full lg:w-[520px] h-[45px] flex items-center px-3">
        <select className="pl-1 pr-2 text-sm">
          <option value="category">All Categories</option>
        </select>
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full h-full focus:outline-none text-sm"
        />
        <button type="submit" className="text-[#1ABA1A]">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="hidden lg:flex gap-4 flex-1 justify-between text-white text-sm text-center">
        <span>FREE SHIPPING OVER $199</span>
        <span>30 DAYS MONEY BACK</span>
        <span>100% SECURE PAYMENT</span>
      </div>
    </div>
  );
}
