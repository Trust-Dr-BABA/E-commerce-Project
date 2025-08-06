"use client";
import Link from "next/link";
import Image from "next/image"; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Frequently() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4">
        
      <div className="w-full md:w-[75%] bg-white p-6 rounded-[10px]">
        <h6 className="text-[18px] font-bold mb-4">FREQUENTLY BOUGHT TOGETHER</h6>
          
        <div className="flex flex-col md:flex-row gap-4">

          <div className="w-full md:w-[75%]">
            <div className="flex items-center justify-center flex-wrap gap-4 mb-6">
              <Image src="/phoneslider3.png" alt="phone" width={190} height={200} className="object-contain" />
              <div className="h-[30px] w-[30px] bg-[#E2E4EB] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faPlus} className="h-[14px] w-[14px]" />
              </div>
              <Image src="/bestseller-headphones1.png" alt="headphone" width={190} height={200} className="object-contain" />
              <div className="h-[30px] w-[30px] bg-[#E2E4EB] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faPlus} className="h-[14px] w-[14px]" />
              </div>
              <Image src="/bestseller-watch.png" alt="watch" width={190} height={200} className="object-contain" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-[14px] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer" />
                <span><span className="font-bold">This item:</span> Somseng Galatero X6 Ultra LTE 4G/128 Gb, Black Smartphone (<span className="text-red-500">$569.00</span>)</span>
              </label>
              <label className="flex items-center gap-2 text-[14px] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer" />
                  BOSO 2 Wireless On Ear Headphone (<span className="text-red-500">$569.00</span>)
              </label>
              <label className="flex items-center gap-2 text-[14px] cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer" />
                  Opplo Watch Series 8 GPS + Cellular (<span className="text-red-500">$569.00</span>)
              </label>
            </div>
          </div>

          <div className="w-full md:w-[25%] mt-6 md:mt-0">
            <p className="text-[12px] text-[#666666]">TOTAL PRICE</p>
            <h5 className="text-[30px] font-bold mb-6">$609.00</h5>
            <Link href="/" className="inline-block text-white bg-[#1ABA1A] rounded-[10px] py-3 px-6 text-[14px]">ADD TO CART</Link>
            <button onClick={() => setLiked(!liked)} className={`mt-4 flex items-center gap-2 text-[14px] cursor-pointer transition-colors duration-200 ${ liked ? "text-red-500" : "text-[#999999]"}`}>
              <FontAwesomeIcon icon={faHeart} className="h-[14px] w-[14px]" />
              <span className="text-[#666666]">Add all to wishlist</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 w-full h-full md:w-[25%]">
        <Link href="/" className="bg-[url('/deal1.png')] bg-cover bg-center h-[200px] rounded-[10px] w-full block"></Link>
        <Link href="/" className="bg-[url('/deal2.png')] bg-cover bg-center h-[200px] rounded-[10px] w-full block"></Link>
      </div>
    </div>
  );
}
