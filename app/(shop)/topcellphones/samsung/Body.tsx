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
  faSync,
  faPhone,
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
  const [currentPic, setCurrentPic] = useState("/samsung1.jpg");
  const [liked, setLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");

  const colors = [
    { image: "/samsung1.jpg", name: "Midnight Blue", price: "$569.00" },
    { image: "/samsungpurple.jpg", name: "Deep Purple", price: "$569.00" },
    { image: "/samsungblack.jpg", name: "Space Black", price: "$569.00" },
  ];
  const memories = ["64GB", "128GB", "256GB", "512GB"];

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
          <button onClick={() => setCurrentPic("/samsung1.jpg")}>
            <div className="cursor-pointer">
              <Image
                src="/samsung1.jpg"
                alt="Deal Ad"
                width={35}
                height={60}
                className="h-[60px] w-auto"
              />
            </div>
          </button>
          <button onClick={() => setCurrentPic("/samsung2.jpg")}>
            <div className="cursor-pointer">
              <Image
                src="/samsung2.jpg"
                alt="Deal Ad"
                width={35}
                height={60}
                className="h-[60px] w-auto"
              />
            </div>
          </button>
          <button onClick={() => setCurrentPic("/samsung3.jpg")}>
            <div className="cursor-pointer">
              <Image
                src="/samsung3.jpg"
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
          Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
        </h4>
        <h3 className="text-[22px] font-bold">$569.00 - $609.00</h3>
        <ul className="list-disc list-inside space-y-1 text-[12px] mb-[25px]">
          <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
          <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
          <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
        </ul>
        <Link href="/" className="text-[#1ABA1A] text-[12px] p-3 rounded-[6px]">
          FREE SHIPPING
        </Link>
        <Link href="/" className="text-[#F1352B] text-[12px] p-3 rounded-[6px]">
          FREE GIFT
        </Link>
        <div className="border-y border-[#CCCCCC] py-8 my-6">
          <p className="font-bold text-[14px]">
            COLOR:{" "}
            <span className="text-[#666666] font-normal">{selectedColor}</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {colors.map((color) => (
              <div
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`cursor-pointer flex justify-center border rounded-[10px] p-3 text-center transition ${
                  selectedColor === color.name
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${color.image})` }}
                  title={color.name}
                ></div>
                <div>
                  <p className="mt-2 font-medium text-sm">{color.name}</p>
                  <p className="text-sm text-gray-500">{color.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-bold text-[14px] mt-4">
            MEMORY SIZE:{" "}
            <span className="text-[#666666] font-normal">{selectedMemory}</span>
          </p>
          <div className="flex gap-4">
            {memories.map((memory) => (
              <div
                key={memory}
                onClick={() => setSelectedMemory(memory)}
                className={`cursor-pointer px-4 py-2 rounded-[8px] border 
                ${
                  selectedMemory === memory
                    ? "border-green-500"
                    : "border-gray-300"
                }
                hover:border-green-500 transition`}
              >
                {memory}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#ECF6EC] p-8 rounded-[10px] flex gap-12">
          <Image src="/gift.png" alt="Gift" width={90} height={95} />
          <div>
            <ul className="list-disc list-inside space-y-1 text-[14px] mb-6">
              <li>
                Buy <span className="text-red-500">02</span> boxes get a{" "}
                <span className="font-bold">Snack Tray</span>
              </li>
              <li>
                {" "}
                Buy <span className="text-red-500">04</span> boxes get a free{" "}
                <span className="font-bold">Block Toys</span>
              </li>
            </ul>
            <p className="italic text-[#666666]">
              Promotion will expires in: 9h00pm, 25/5/2024
            </p>
          </div>
        </div>
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
          <p className="text-[#666666] text-[12px]">TOTAL PRIZE</p>
          <h5 className="text-[30px] font-bold">$609.00</h5>
          <div className="flex gap-2 text-[12px] border-b border-[#DEE2E6] py-6">
            <Image src="/affirm.png" alt="Affirm" width={45} height={22} />
            <p className="text-red-500">$49/m</p>
            <p>in 12 months.</p>
            <Link href="/" className="underline text-blue-500">
              See more
            </Link>
          </div>
          <div className="py-4 gap-2 flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="bg-green-500 text-white w-[16spx] h-[16px] p-[2px] rounded-full"
            />
            <span className="text-[12px]">In stock</span>
          </div>
          <div className="w-full">
            <Counter w={100} />
          </div>
          <Link
            href="/"
            className="flex justify-center text-white bg-[#1ABA1A] rounded-[10px] py-3 px-6 text-[14px] w-full mt-2"
          >
            ADD TO CART
          </Link>
          <Link
            href="/"
            className="flex justify-center items-center gap-2 bg-[#F6AB4A] rounded-[10px] py-3 px-6 text-[14px] w-full mt-2"
          >
            BUY WITH
            <Image
              src="/paypal.png"
              alt="Pay"
              width={60}
              height={15}
              className="h-[15px] w-auto"
            />
          </Link>
          <div className="flex items-center text-[14px] justify-between py-4 border-b border-[#DEE2E6]">
            <button
              onClick={() => setLiked(!liked)}
              className={`gap-2 cursor-pointer transition-colors duration-200 ${
                liked ? "text-red-500" : "text-[#999999]"
              }`}
            >
              <FontAwesomeIcon icon={faHeart} className="h-[14px] w-[14px]" />
              <span className="text-[#666666]">Add all to wishlist</span>
            </button>
            <button className="gap-2 cursor-pointer text-[#666666]">
              <FontAwesomeIcon icon={faSync} className="h-[14px] w-[14px]" />
              <span>Compare</span>
            </button>
          </div>
          <p className="text-[12px] my-2">Guaranteed Safe Checkout</p>
          <Image src="/payline.png" alt="Pay" width={242} height={22} />
        </div>
        <div className="bg-[#EDEFF6] rounded-[10px] p-8">
          <Link
            href="/"
            className="flex justify-center items-center bg-[#333333] gap-2 text-white rounded-[10px] py-3 px-6 text-[14px]"
          >
            <FontAwesomeIcon icon={faPhone} className="h-[14px] w-[14px]" />
            Quick Order 24/7
          </Link>
          <h5 className="text-[22px] font-bold">(025) 3886 25 16</h5>
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
