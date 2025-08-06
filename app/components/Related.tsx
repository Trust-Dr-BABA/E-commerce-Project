import Link from "next/link";
import Image from "next/image";
import HeartButton from "@/app/components/HeartReact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';


export default function TopCell() {
    return (
        <div className="p-8 bg-white rounded-[10px]">
            <h6 className="text-[18px] font-bold">RELATED PRODUCTS</h6>
            <div className="flex items-center pt-8">
                <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">◀</button>
                <div className="grid grid-cols-5 gap-4">
            
                    <div className="relative">
                        <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                            <p className="text-[10px]">SAVE</p>
                            <h6 className="text-[14px] font-medium">$199.00</h6>
                        </div>
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <Link href="/" className="flex justify-center items-center"><Image src="/phoneslider1.png" alt="Phone" width={190} height={200}/></Link>
                        <div className="pl-8">
                            <div className="flex text-yellow-400 gap-1 pb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                ))}
                                <p className="text-[#666666] text-[13px]">(152)</p>
                            </div>
                            <h4 className="text-[14px] font-bold">SROK Smart Phone 128GB, Oled Retina</h4>
                            <div className="flex my-[10px] items-center gap-2">
                                <h3 className="text-[18px] text-[#F1352B] font-semibold">$579.00 </h3>
                                <h3 className="text-[#666666] text-[14px] font-semibold line-through">$859.00</h3>
                            </div>
                            <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                            <div className="py-2 gap-2 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16spx] h-[16px] p-[2px] rounded-full" />
                                <span className="text-[12px]">In stock</span>
                            </div>
                        </div>
                     </div>
            
                    <div className="relative">
                        <div className="absolute top-3 left-3 bg-black text-white rounded-[10px] p-2 z-10">
                            <p className="text-[10px]">NEW</p>
                        </div>
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <Link href="/" className="flex justify-center items-center"><Image src="/phoneslider2.png" alt="Phone" width={190} height={200}/></Link>
                        <div className="pl-8">
                            <div className="flex text-yellow-400 gap-1 pb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                ))}
                                <p className="text-[#666666] text-[13px]">(152)</p>
                            </div>
                            <h4 className="text-[14px] font-bold">aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB</h4>
                            <h3 className="text-[18px] font-semibold my-[10px]">$979.00 - $1,259.00</h3>
                            <p className="text-[10px] p-3">$2.98 SHIPPING</p>
                            <div className="py-2 gap-2 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                                <span className="text-[12px]">In stock</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <Link href="/topcellphones/samsung" className="flex justify-center items-center"><Image src="/phoneslider3.png" alt="Best Seller Mini case" width={190} height={200}/></Link>
                        <div className="pl-8">
                            <div className="flex text-yellow-400 gap-1 pb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                ))}
                                <p className="text-[#666666] text-[13px]">(5)</p>
                            </div>
                            <h4 className="text-[14px] font-bold">OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS</h4>
                            <h3 className="text-[18px] font-semibold my-[10px]">$659.00 </h3>
                            <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                            <Link href="/" className="text-[#F1352B] text-[10px] p-3 rounded-[6px]">FREE GIFT</Link>
                            <div className="py-2 gap-2 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                                <span className="text-[12px]">In stock</span>
                            </div>
                            <div className="py-2 flex items-center">
                                <Link href="/"><Image src="/phoneslider3.png" alt="Best Seller Headphones" width={40} height={40} /></Link>
                                <Link href="/"><Image src="/phoneslider1.png" alt="Best Seller Headphones" width={40} height={40} /></Link>
                                <Link href="/"><Image src="/phoneslider4.png" alt="Best Seller Headphones" width={40} height={40} /></Link>
                            </div>
                        </div>
                    </div>
            
                    <div className="relative">
                        <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                            <p className="text-[10px]">SAVE</p>
                            <h6 className="text-[14px] font-medium">$59.00</h6>
                        </div>
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <Link href="/" className="flex justify-center items-center"><Image src="/phoneslider4.png" alt="Best Seller Watch" width={190} height={200}/></Link>
                        <div className="pl-8">
                            <div className="flex text-yellow-400 gap-1 pb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                ))}
                                <p className="text-[#666666] text-[13px]">(9)</p>
                            </div>
                            <h4 className="text-[14px] font-bold">Xiamoi Redmi Note 5, 64GB</h4>
                            <div className="flex my-[10px] items-center gap-2">
                                <h3 className="text-[18px] text-[#F1352B] font-semibold">$1,239.00 </h3>
                                <h3 className="text-[#666666] text-[14px] font-semibold line-through">$1,619.00</h3>
                            </div>
                            <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                            <p className="text-[12px]  pt-3">CONTACT</p>
                        </div>
                    </div>
            
                    <div className="relative">
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <Link href="/" className="flex justify-center items-center"><Image src="/phoneslider5-1.png" alt="Best Seller Charger" width={190} height={200}/></Link>
                        <div className="pl-8">
                            <div className="flex text-yellow-400 gap-1 pb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                ))}
                                <p className="text-[#666666] text-[13px]">(8)</p>
                            </div>
                            <h4 className="text-[14px] font-bold">Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver</h4>
                            <h3 className="text-[18px] font-semibold my-[10px]">$1,729.00 </h3>
                            <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                            <p className="text-[12px]  pt-3">CONTACT</p>
                            <div className="py-2 flex items-center">
                                <Link href="/"><Image src="/phoneslider5-1.png" alt="Best Seller Headphones" width={40} height={40} /></Link>
                                <Link href="/"><Image src="/phoneslider5-2.png" alt="Best Seller Headphones" width={40} height={40} /></Link>
                            </div>
                        </div>
                    </div>
            
                </div>
                <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">▶</button>
            </div>
        </div>
    );
}