import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faSync, faShoppingBag } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return(
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 my-4 mx-4 p-2">
            <Link href ="/">
                <Image src="/logo1.png" alt="Logo" width="161" height="50"/>
            </Link>

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
            <div className="flex items-center gap-x-4">
                <div className="flex gap-x-4">
                    <Link href="/" className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full">
                        <FontAwesomeIcon icon={faSync} className="w-[18.2px] h-[18px]"/>
                    </Link>
                    <Link href="/" className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full">
                        <FontAwesomeIcon icon={faHeart} className="w-[18.2px] h-[18px]"/>
                    </Link>
                    <Link href="/profile" className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full">
                        <FontAwesomeIcon icon={faUser} className="w-[18.2px] h-[18px]"/>
                    </Link>
                </div>
                <div>
                    <p className="text-[11px]">WELCOME</p>
                    <Link href="/login" className="text-[14px] font-bold">LOG IN / REGISTER</Link>
                </div>
                <div>
                    <Link href="/cart" className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full">
                        <FontAwesomeIcon icon={faShoppingBag} className="w-[18.2px] h-[18px] inline" />
                    </Link>
                </div>
                <div>
                    <p className="text-[11px]">CART</p>
                    <Link href="/cart" className="text-[14px] font-bold">$1,689.00</Link>
                </div>
            </div>
        </div>
    );
}
