import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
    return(
        <div className="flex  flex-wrap md:flex-nowrap justify-between items-center gap-4 bg-[#1ABA1A] rounded-[10px] px-4 py-4">
            <div className="bg-white rounded-full w-full md:w-[520px] h-[45px] flex items-center px-3">
                <select className="pl-1 pr-2 text-sm">
                    <option value="category">All Categories</option>
                </select>
                <input type="text" placeholder="Search anything..." className="w-full h-full focus:outline-none text-sm"/>
                <button type="submit" className="text-[#1ABA1A]">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <span className="text-white text-center text-sm">FREE SHIPPING OVER $199</span>
            <span className="text-white text-center text-sm">30 DAYS MONEY BACK</span>
            <span className="text-white text-center text-sm">100% SECURE PAYMENT</span>
        </div>
    );
}
