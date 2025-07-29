"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Deals() {
    const [currentPic, setCurrentPic] = useState("/dealad1.png");

    return (
        <div className="flex pt-4 gap-4">
            <div className="w-[75%]">
                <div className="text-white bg-[#1ABA1A] flex justify-between items-center p-5 rounded-[10px]">
                    <h6 className="font-bold text-[18px]">DEALS OF THE DAY</h6>
                    <Link href="/" className="text-[13px]">View All
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>
                <div className="p-4 flex bg-white rounded-[10px]">
                    <div className="pt-[35px] flex w-[50%]">
                        <div className="flex flex-col items-center w-[36px]">
                            <button onClick={() => setCurrentPic("/dealad1.png")}>
                                <div className="cursor-pointer">
                                    <Image src="/dealad1.png" alt="Deal Ad" width={35} height={60} className="h-[60px] w-auto"/>
                                </div>
                            </button>
                            <button onClick={() => setCurrentPic("/dealad2.png")}>
                                <div className="cursor-pointer">
                                    <Image src="/dealad2.png" alt="Deal Ad" width={35} height={60} className="h-[60px] w-auto"/>
                                </div>
                            </button>
                            <button onClick={() => setCurrentPic("/dealad3.png")}>
                                <div className="cursor-pointer">
                                    <Image src="/dealad3.png" alt="Deal Ad" width={35} height={60} className="h-[60px] w-auto"/>
                                </div>
                            </button>
                            <button onClick={() => setCurrentPic("/dealad4.png")}>
                                <div className="cursor-pointer">
                                    <Image src="/dealad4.png" alt="Deal Ad" width={35} height={60} className="h-[60px] w-auto"/>
                                </div>
                            </button>
                        </div>
                        <div className="relative">
                            <div className="flex justify-between items-center pl-[35px]">
                                <div className="text-white bg-[#1ABA1A] rounded-[10px] p-3">
                                    <p className="text-[12px]">SAVE</p>
                                    <h6 className="text-[18px] font-medium">$199.00</h6>
                                </div>
                                <FontAwesomeIcon icon={faPlus} className="w-[14.2px] h-[14px]"/>
                            </div>
                            <div className="w-[405px] flex justify-center items-center">
                                <Image src={currentPic} alt="Deal ad" width={405} height={280} className="h-[280px] w-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[50%]">
                        <div className="flex text-yellow-400 gap-1">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                            ))}
                            <p className="text-[#666666] text-[13px]">(12)</p>
                        </div>
                        <h4 className="text-[16px] font-bold">Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone</h4>
                        <div className="flex my-[20px] items-center gap-2">
                            <h3 className="text-[22px] text-[#F1352B]">$569.00 </h3>
                            <h3 className="text-[#666666] text-[16px] font-semibold line-through">$759.00</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-[12px] mb-[25px]">
                            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                            <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                        </ul>
                        <Link href="/" className="text-[#1ABA1A] text-[12px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                        <Link href="/" className="text-[#F1352B] text-[12px] p-3 rounded-[6px]">FREE GIFT</Link>
                        <div className="flex space-x-8 mt-[30px]">
                            <p className="w-[115px] text-[13px]">HURRY UP! PROMOTION WILL EXPIRES IN</p>
                            <div className="bg-[#EBEDF3] rounded-[10px] p-3 text-center">
                                <p className="font-bold text-[20px]">-162</p>
                                <p className="font-bold text-[14px] text-[#666666]">d</p>
                            </div>
                            <div className="bg-[#EBEDF3] rounded-[10px] p-3 text-center">
                                <p className="font-bold text-[20px]">-9</p>
                                <p className="font-bold text-[14px] text-[#666666]">h</p>
                            </div>
                            <div className="bg-[#EBEDF3] rounded-[10px] p-3 text-center">
                                <p className="font-bold text-[20px]">-32</p>
                                <p className="font-bold text-[14px] text-[#666666]">m</p>
                            </div>
                            <div className="bg-[#EBEDF3] rounded-[10px] p-3 text-center">
                                <p className="font-bold text-[20px]">-34</p>
                                <p className="font-bold text-[14px] text-[#666666]">s</p>
                            </div>
                        </div>
                        <div className="mt-[25px] pb-4">
                            <div className="h-[8px] rounded-[10px] bg-[#E2E4EB] w-[400px]">
                                <div className="bg-[#1ABA1A] h-[8px] w-[157px] rounded-[10px]"></div>
                            </div>
                            <p className="text-[13px]">Sold: <span className="font-bold">26/75</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-row-3 gap-4 w-[25%]">
                <Link href="/" className="bg-[url('/deal1.png')] bg-cover bg-center h-full w-full rounded-[10px]"></Link>
                <Link href="/" className="bg-[url('/deal2.png')] bg-cover bg-center h-full w-full rounded-[10px]"></Link>
                <Link href="/" className="bg-[url('/deal3.png')] bg-cover bg-center h-full w-full rounded-[10px]"></Link>
            </div>
        </div>
    );
}