import Link from "next/link";
import Image from "next/image";
import HeartButton from "../../HeartReact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';


export default function TopCellphones() {
    return (
        <div className="bg-white rounded-[10px]">
            <div className="p-8">

                <div className="flex justify-between items-center">
                    <div className="flex gap-8 items-center">
                        <h6 className="text-[18px] font-bold">YOUR RECENTLY VIEWED</h6>
                        <Link href="/" className="text-[13px] text-[#666666]">View All 
                            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between gap-3 bg-[#EBEDF3] rounded-full p-2 w-[70px]">
                        <button className="text-black">◀</button>
                        <button className="text-black">▶</button>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-[30px]">
            
                    <div className="relative">
                        <div className="absolute top-3 left-3 bg-black text-white rounded-[10px] p-2 z-10">
                            <p className="text-[10px]">NEW</p>
                        </div>
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <div className="flex pt-4">
                            <Link href="/"><Image src="/recentlyview1.png" alt="Best Seller Headphones" width={120} height={90}/></Link>
                                <div>
                                    <div className="flex text-yellow-400 gap-1 pb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                        ))}
                                        <p className="text-[#666666] text-[13px]">(152)</p>
                                    </div>
                                    <h4 className="text-[14px] font-bold">SROK Smart Phone 128GB, Oled Retina</h4>
                                    <h3 className="text-[18px] font-semibold my-[10px]">$979.00</h3>
                                </div>
                        </div>
                    </div>
            
                    <div className="relative">
                        <div className="absolute top-3 left-3 bg-black text-white rounded-[10px] p-2 z-10">
                            <p className="text-[10px]">NEW</p>
                        </div>
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <div className="flex pt-4">
                            <Link href="/"><Image src="/recentlyview2.png" alt="Best Seller Tablet" width={120} height={90}/></Link>
                            <div>
                                <div className="flex text-yellow-400 gap-1 pb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                    ))}
                                    <p className="text-[#666666] text-[13px]">(152)</p>
                                </div>
                                <h4 className="text-[14px] font-bold">aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB</h4>
                                <h3 className="text-[18px] font-semibold my-[10px]">$979.00</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <div className="flex pt-4">
                            <Link href="/"><Image src="/recentlyview3.png" alt="Best Seller Mini case" width={120} height={90}/></Link>
                            <div>
                                <div className="flex text-yellow-400 gap-1 pb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                    ))}
                                    <p className="text-[#666666] text-[13px]">(5)</p>
                                </div>
                                <h4 className="text-[14px] font-bold">OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS</h4>
                                <h3 className="text-[18px] font-semibold my-[10px]">$979.00 - $1,259.00</h3>
                            </div>
                        </div>
                    </div>
            
                    <div className="relative">
                        <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                            <p className="text-[10px]">SAVE</p>
                            <h6 className="text-[14px] font-medium">$192.00</h6>
                        </div>
                        <HeartButton hb={30} wb={30} hi={14} wi={14} />
                        <div className="flex pt-4">
                            <Link href="/"><Image src="/recentlyview4.png" alt="Best Seller Watch" width={120} height={90}/></Link>
                            <div>
                                <div className="flex text-yellow-400 gap-1 pb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                    ))}
                                    <p className="text-[#666666] text-[13px]">(9)</p>
                                </div>
                                <h4 className="text-[14px] font-bold">Xiamoi Redmi Note 5, 64GB</h4>
                                <div className="flex my-[10px] items-center gap-2">
                                    <h3 className="text-[18px] text-[#F1352B] font-semibold">$579.00 </h3>
                                    <h3 className="text-[#666666] text-[14px] font-semibold line-through">779.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    );
}