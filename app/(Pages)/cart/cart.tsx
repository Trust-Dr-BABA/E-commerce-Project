import Image from "next/image";
import Link from "next/link";
import Counter from "./counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  return (
    <div className="bg-white rounded-[10px] p-12 my-4 gap-6 flex">
        <div className="w-[70%] space-y-4">

            <div className="relative p-4">
                <div className="absolute top-7 left-7 bg-[#1ABA1A] text-white rounded-[10px] px-3 py-1 z-10">
                    <p className="text-[10px]">SAVE</p>
                    <h6 className="text-[14px] font-medium">$192.00</h6>
                </div>
                <div className="absolute top-7 right-7 z-10 flex gap-2">
                    <div className="bg-[#E2E4EB] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                        <FontAwesomeIcon icon={faHeart} className="w-[18.2px] h-[18px]"/>
                    </div>
                    <div className="bg-red-100 rounded-full w-[35px] h-[35px] flex justify-center items-center">
                        <FontAwesomeIcon icon={faTrash} className="w-[18.2px] h-[18px]" />
                    </div>
                </div>
                <div className="flex pt-4 gap-4">
                    <Link href="/"><Image src="/phoneslider1.png" alt="Best Seller Watch" width={220} height={250}/></Link>
                    <div className="flex flex-col justify-center w-[80%]">
                        <div className="flex text-yellow-400 gap-1 pb-2">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="text-[13px]" />
                            ))}
                            <p className="text-[#666666] text-[13px]">(152)</p>
                        </div>
                        <h6 className="text-[14px] font-bold">SROK Smart Phone 128GB, Oled Retina</h6>
                        <h3 className="text-[18px] text-[#F1352B] font-semibold">$579.00 </h3>
                        <Counter />
                        <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                        <div className="py-2 gap-2 flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                            <span className="text-[12px]">In stock</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative p-4">
                <div className="absolute top-7 left-7 bg-black text-white rounded-[10px] p-2 z-10">
                    <p className="text-[10px]">NEW</p>
                </div>
                <div className="absolute top-7 right-7 z-10 flex gap-2">
                    <div className="bg-[#E2E4EB] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                        <FontAwesomeIcon icon={faHeart} className="w-[18.2px] h-[18px]"/>
                    </div>
                    <div className="bg-red-100 rounded-full w-[35px] h-[35px] flex justify-center items-center">
                        <FontAwesomeIcon icon={faTrash} className="w-[18.2px] h-[18px]" />
                    </div>
                </div>
                <div className="flex pt-4 gap-4">
                    <Link href="/"><Image src="/phoneslider2.png" alt="Best Seller Headphones" width={220} height={250}/></Link>
                    <div className="flex flex-col justify-center w-[80%]">
                        <div className="flex text-yellow-400 gap-1 pb-2">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="text-[13px]" />
                            ))}
                            <p className="text-[#666666] text-[13px]">(152)</p>
                        </div>
                        <h6 className="text-[14px] font-bold">aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB</h6>
                        <h3 className="text-[18px] font-semibold my-[10px]">$979.00</h3>
                        <Counter />
                        <p className="text-[10px] p-3">$2.98 SHIPPING</p>
                        <div className="py-2 gap-2 flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                            <span className="text-[12px]">In stock</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative p-4">
                <div className="absolute top-7 left-7 bg-black text-white rounded-[10px] p-2 z-10">
                    <p className="text-[10px]">NEW</p>
                </div>
                <div className="absolute top-7 right-7 z-10 flex gap-2">
                    <div className="bg-[#E2E4EB] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                        <FontAwesomeIcon icon={faHeart} className="w-[18.2px] h-[18px]"/>
                    </div>
                    <div className="bg-red-100 rounded-full w-[35px] h-[35px] flex justify-center items-center">
                        <FontAwesomeIcon icon={faTrash} className="w-[18.2px] h-[18px]" />
                    </div>
                </div>
                <div className="flex pt-4 gap-4">
                    <Link href="/"><Image src="/phoneslider3.png" alt="Best Seller Headphones" width={220} height={250}/></Link>
                    <div className="flex flex-col justify-center w-[80%]">
                        <div className="flex text-yellow-400 gap-1 pb-2">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="text-[13px]" />
                            ))}
                            <p className="text-[#666666] text-[13px]">(5)</p>
                        </div>
                        <h4 className="text-[14px] font-bold">Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone</h4>
                        <h3 className="text-[18px] font-semibold my-[10px]">$659.00</h3>
                        <Counter />
                        <div className="p-2">
                            <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                            <Link href="/" className="text-[#F1352B] text-[10px] p-3 rounded-[6px]">FREE GIFT</Link>
                        </div>
                        <div className="py-2 gap-2 flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                            <span className="text-[12px]">In stock</span>
                        </div>
                    </div>
                </div>
            </div>                    

        </div>

        <div className="flex items-end w-[30%]">
            <div className="border border-[#1ABA1A] p-8 w-full rounded-[10px]">
                <p className="text-[16px] font-bold mb-4">Order Summary</p>
                <div className="py-4 border-b border-[#CCCCCC] flex justify-between text-[14px]">
                    <p className="text-[#666666]">Sub Total:</p>
                    <p className="font-bold">$1,000.00</p>
                </div>
                <div className="py-4 border-b border-[#CCCCCC] flex justify-between text-[14px]">
                    <p className="text-[#666666]">Shopping estimate:</p>
                    <p className="font-bold">$600.00</p>
                </div>
                <div className="py-4 border-b border-[#CCCCCC] flex justify-between text-[14px]">
                    <p className="text-[#666666]">Tax estimate:</p>
                    <p className="font-bold">$137.00</p>
                </div>
                <div className="py-4 flex justify-between text-[14px] font-bold">
                    <p>ORDER TOTAL:</p>
                    <p>$1,737.00</p>
                </div>
                <div className="flex justify-center items-center">
                    <Link href="/checkout" className="text-white bg-[#1ABA1A] rounded-[10px] py-3 px-10 text-[14px] mt-6">CHECKOUT</Link>
                </div>
            </div>
        </div>
    </div>
  );
}