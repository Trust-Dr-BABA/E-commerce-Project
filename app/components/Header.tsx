import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faUser, faHeart, faSync, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
  return(
    <div>
        <div className="flex justify-between text-[14px] mt-[10px] mx-[30px]">
            <div className="space-x-2 flex justify-center">
                <div className="pl-[10px]">
                    <FontAwesomeIcon icon={faPhoneVolume} className="w-[12.2px] h-[12px] inline mr-[5px]" />
                    <span>Hotline 24/7</span>
                </div>
                <span className="font-bold"> (025) 3888 25 16</span>
            </div>
            <div className="space-x-2">
                <Link href="/" >Sell on Swoo</Link>
                <Link href="/" >Order Tracking</Link>
                <select>
                    <option value="usd">USD</option>
                </select>
                <select>
                    <option value="english">ENG</option>
                </select>
            </div>
        </div>
        <div className="flex justify-between items-center h-[50px] my-[20px] mx-[15px] p-[10px]">
            <Link href ="/"><Image src="/logo.png" alt="Logo" width={161} height={50}/></Link>
            <div>
                <select>
                    <option value="1">HOMES</option>
                </select>
                <select>
                    <option value="page">PAGES</option>
                </select>
                <select>
                    <option value="products">PRODUCTS</option>
                </select>
                <Link href="/contact">CONTACT</Link>
            </div>
            <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                    <Link href="/" className="w-[40px] h-[40px] flex justify-center items-center"><FontAwesomeIcon icon={faSync} className="w-[18.2px] h-[18px] inline "/></Link>
                    <Link href="/" className="w-[40px] h-[40px] flex justify-center items-center"><FontAwesomeIcon icon={faHeart} className="w-[18.2px] h-[18px] inline"/></Link>
                    <Link href="/profile" className="w-[40px] h-[40px] flex justify-center items-center"><FontAwesomeIcon icon={faUser} className="w-[18.2px] h-[18px] inline"/></Link>
                </div>
                <div>
                    <p className="text-[11px]">WELCOME</p>
                    <Link href="/login" className="text-[14px] font-bold">LOG IN / REGISTER</Link>
                </div>
                <div>
                    <Link href="/" className="w-[50px] h-[40px] flex justify-center items-center"><FontAwesomeIcon icon={faShoppingBag} className="w-[18.2px] h-[18px] inlne" /></Link>
                </div>
                <div>
                    <p className="text-[11px]">CART</p>
                    <Link href="/" className="text-[14px] font-bold">$1,689.00</Link>
                </div>
            </div>
        </div>
        <div className="flex justify-around items-center bg-[#1ABA1A] rounded-[10px] h-[75px]">
            <div className="bg-[#FFFFFF] rounded-[30px]  w-[516.66px] h-[45px] flex items-center">
                <select>
                    <option value="category">All Categories</option>
                </select>
            </div>
            <span className="text-white text-center">FREE SHIPPING OVER $199</span>
            <span className="text-white text-center">30 DAYS MONEY BACK</span>
            <span className="text-white text-center">100% SECURE PAYMENT</span>
        </div>
    </div>
  );
}