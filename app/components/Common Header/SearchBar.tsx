import Image from "next/image";
import Link from 'next/link';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
    return(
        <div className="flex justify-around items-center bg-[#1ABA1A] rounded-[10px] h-[75px]">
            <div className="bg-[#FFFFFF] rounded-[30px]  w-[516.66px] h-[45px] flex items-center">
                <select className="pl-2">
                    <option value="category">All Categories</option>
                </select>
                <div className="flex items-center justify-center w-[100%] h-[100%]">
                    <input type="search" id="site-search" name="q" placeholder="Search anything..." className="w-[350px]"/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <span className="text-white text-center">FREE SHIPPING OVER $199</span>
            <span className="text-white text-center">30 DAYS MONEY BACK</span>
            <span className="text-white text-center">100% SECURE PAYMENT</span>
        </div>
    );
}
