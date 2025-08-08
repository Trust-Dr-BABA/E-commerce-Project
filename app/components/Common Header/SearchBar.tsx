"use client";
import { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`transition-transform duration-300 bg-white rounded-[10px] shadow-md ${
        show ? "translate-y-1" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-14 items-center gap-4 bg-[#1ABA1A] rounded-[10px] px-4 py-4">
        <div className="bg-white rounded-full w-full lg:w-[520px] h-[45px] flex items-center px-3">
          <select className="pl-1 pr-2 text-sm cursor-pointer">
            <option value="category">All Categories</option>
          </select>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full h-full focus:outline-none text-sm"
          />
          <button type="submit" className="text-[#1ABA1A]  cursor-pointer">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="hidden lg:flex gap-4 flex-1 justify-between text-white text-sm text-center">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>
    </nav>
  );
}
