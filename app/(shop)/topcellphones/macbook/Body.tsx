"use client";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/app/components/counter";
import { useState } from "react";
import HeartButton from "@/app/components/HeartReact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheck,
  faHeart,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

export default function Body() {
  const [currentPic, setCurrentPic] = useState("/macbook1.jpg");
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white p-8 rounded-[10px] grid grid-cols-[40%_40%_20%] gap-4">
      <div className="grid-span-1">
        <div className="relative">
          <div className="absolute top-3 left-3 bg-black text-white rounded-[10px] p-2 z-10">
            <p className="text-[10px]">NEW</p>
          </div>
          <HeartButton />
          <div className="flex justify-center items-center">
            <Image
              src={currentPic}
              alt="Deal ad"
              width={524}
              height={550}
              className="h-[400px] w-auto"
            />
          </div>
        </div>
        <div className="flex gap-14 items-center mt-8">
          <button onClick={() => setCurrentPic("/macbook1.jpg")}>
            <div className="cursor-pointer">
              <Image
                src="/macbook1.jpg"
                alt="Deal Ad"
                width={35}
                height={60}
                className="h-[60px] w-auto"
              />
            </div>
          </button>
          <button onClick={() => setCurrentPic("/macbook2.jpg")}>
            <div className="cursor-pointer">
              <Image
                src="/macbook2.jpg"
                alt="Deal Ad"
                width={35}
                height={60}
                className="h-[60px] w-auto"
              />
            </div>
          </button>
          <button onClick={() => setCurrentPic("/macbook3.jpg")}>
            <div className="cursor-pointer">
              <Image
                src="/macbook3.jpg"
                alt="Deal Ad"
                width={35}
                height={60}
                className="h-[60px] w-auto"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="grid-span-1">
        <div className="flex text-yellow-400 gap-1">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
          ))}
          <p className="text-[#666666] text-[13px]">(12)</p>
        </div>
        <h4 className="text-[16px] font-bold">
          Pinnapple Macbook Pro 2022 M1 / 512GB Dark Grey
        </h4>
        <h3 className="text-[22px] font-bold">$579.00 </h3>
        <ul className="list-disc list-inside space-y-1 text-[12px] mb-[25px]">
          <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
          <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
          <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
        </ul>
        <Link
          href="/"
          className="text-[#1ABA1A] text-[12px] p-3 rounded-[6px] flex pb-8 border-b border-[#DEE2E6]"
        >
          FREE SHIPPING
        </Link>
        <div className="py-4 gap-2 flex items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="bg-green-500 text-white w-[16spx] h-[16px] p-[2px] rounded-full"
          />
          <span className="text-[12px]">In stock</span>
        </div>
        <div className="flex gap-4">
          <Counter w={40} />
          <Link
            href="/"
            className="flex justify-center text-white bg-[#1ABA1A] rounded-[10px] py-3 px-6 text-[14px] w-[40%]"
          >
            ADD TO CART
          </Link>
          <button
            onClick={() => setLiked(!liked)}
            className={`bg-[#E2E4EB] w-[50px] h-[50px] cursor-pointer rounded-full flex justify-center items-center ${
              liked ? "text-red-500" : "text-black"
            } transition-colors duration-200`}
          >
            <FontAwesomeIcon icon={faHeart} className="h-[14px] w-[14px]" />
          </button>
        </div>
        <p className="text-[12px] mt-4">Guaranteed Safe Checkout</p>
        <Image
          src="/payline.png"
          alt="Pay"
          width={242}
          height={22}
          className="mt-2 mb-10"
        />
        <p className="font-bold text-[14px] mt-4">
          SKU: <span className="text-[#666666] font-normal">ABC025168</span>
        </p>
        <p className="font-bold text-[14px]">
          CATEGORY:{" "}
          <span className="text-[#666666] font-normal">
            Cell Phones & Tablets
          </span>
        </p>
        <p className="font-bold text-[14px] mb-4">
          BRAND: <span className="text-[#1ABA1A] font-normal">samsung</span>
        </p>
        <div className="flex flex-row mt-8 gap-4">
          <Link
            href="/"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#E2E4EB] rounded-full"
          >
            <FontAwesomeIcon icon={faTwitter} className="w-[14.2px] h-[14px]" />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#E2E4EB] rounded-full"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-[14.2px] h-[14px]"
            />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#E2E4EB] rounded-full"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[14.2px] h-[14px]"
            />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#E2E4EB] rounded-full"
          >
            <FontAwesomeIcon icon={faYoutube} className="w-[14.2px] h-[14px]" />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#E2E4EB] rounded-full"
          >
            <FontAwesomeIcon
              icon={faPinterestP}
              className="w-[14.2px] h-[14px]"
            />
          </Link>
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-[#EDEFF6] rounded-[10px] p-8">
          <p className="text-[14px] font-bold">
            <span className="text-[#999999] font-normal">Brand: </span> Sonex
          </p>
          <div className="flex items-center justify-center mt-6">
            <Image
              src="/brandlogo9.png"
              alt="Brand Logo"
              width={146}
              height={57}
            />
          </div>
        </div>
        <div className="rounded-[10px] p-8 border border-[#1ABA1A]">
          <p className="text-[16px] font-bold">Your Cart</p>
          <div className="py-2 border-b border-[#CCCCCC] text-[14px]">
            <div className="flex gap-4 py-4">
              <Image
                src="/laptopslider1.png"
                alt="Laptop"
                width={60}
                height={60}
              />
              <div className="text-[14px]">
                <p className="font-semibold">
                  Pinnaeple Macbook Pro 2022 M1/ 512GB
                </p>
                <p className="text-[#666666]">x 3</p>
              </div>
            </div>
          </div>
          <div className="py-4 flex justify-between text-[14px] font-bold border-b border-[#CCCCCC]">
            <p className="text-[#666666]">Sub Total:</p>
            <p className="font-bold">$1,737.00</p>
          </div>
          <div className="flex w-full gap-4 mt-4">
            <Link
              href="/cart"
              className="flex justify-center items-center bg-black text-white rounded-[10px] py-3 px-6 text-[14px] w-[50%]"
            >
              VIEW CART
            </Link>
            <Link
              href="/checkout"
              className="flex justify-center items-center text-white bg-[#1ABA1A] rounded-[10px] py-3 px-6 text-[14px] w-[50%]"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faTruckFast} className="h-[14px] w-[14px]" />
          <p className="text-[14px] gap-2">
            Ships from <span className="font-bold">United States</span>
          </p>
        </div>
      </div>
    </div>
  );
}
