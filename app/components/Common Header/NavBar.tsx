import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faSync,
  faShoppingBag,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="flex flex justify-between items-center gap-4 my-4 mx-4 p-2">
      <div className="block lg:hidden">
        <button className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full">
          <FontAwesomeIcon icon={faBars} className="w-[18px] h-[18px]" />
        </button>
      </div>

      <div className="transform -translate-x-1/2 lg:translate-x-0">
        <Link href="/">
          <Image
            src="/logo-mobile.png"
            alt="Logo"
            width={40}
            height={40}
            className="block lg:hidden"
          />
          <Image
            src="/logo1.png"
            alt="Logo"
            width={161}
            height={50}
            className="hidden lg:block"
          />
        </Link>
      </div>

      <div className="hidden lg:flex gap-4 ml-8">
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
        <div className="hidden sm:flex gap-x-4">
          <Link
            href="/"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full"
          >
            <FontAwesomeIcon icon={faSync} className="w-[18.2px] h-[18px]" />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full"
          >
            <FontAwesomeIcon icon={faHeart} className="w-[18.2px] h-[18px]" />
          </Link>
          <Link
            href="/profile"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full"
          >
            <FontAwesomeIcon icon={faUser} className="w-[18.2px] h-[18px]" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <p className="text-[11px]">WELCOME</p>
          <Link href="/login" className="text-[14px] font-bold">
            LOG IN / REGISTER
          </Link>
        </div>
        <div>
          <Link
            href="/cart"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#EBEEF6] rounded-full"
          >
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="w-[18.2px] h-[18px] inline"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <p className="text-[11px]">CART</p>
          <Link href="/cart" className="text-[14px] font-bold">
            $1,689.00
          </Link>
        </div>
      </div>
    </div>
  );
}
