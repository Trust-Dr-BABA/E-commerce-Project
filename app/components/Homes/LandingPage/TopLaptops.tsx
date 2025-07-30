import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';


export default function TopLaptops() {
    return (
        <div className="bg-white rounded-[10px] mt-4">
            <div className="p-8">

                <div className="flex justify-between items-center">
                    <h6 className="text-[18px] font-bold">BEST LAPTOPS & COMPUTERS</h6>
                    <Link href="/" className="text-[13px] text-[#666666]">View All 
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 py-8">
                    <div className="bg-[url('/laptop-banner.png')] bg-cover bg-center h-full w-full rounded-[10px]">
                        <div className="p-8">
                            <h5 className="text-[24px] w-[20%]">REDMI NOTE 12 PRO+ 5G</h5>
                            <p className="text-[12px] text-[#666666] py-4 mb-2">Rise to the challenge</p>
                            <Link href="/" className="bg-black text-white p-3 rounded-[10px]">BUY NOW</Link>
                        </div>
                    </div>
                    <div className="grid grid-col-3 grid-row-2 gap-4 pl-4">
                        <div className="row-start-1 col-start-1 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Macbook</h6>
                                    <p className="text-[12px] text-[#666666]">74 Items</p>
                                </div>
                                <Image src="/macbook.png" alt="Macbook" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-1 col-start-2 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Gaming PC</h6>
                                    <p className="text-[12px] text-[#666666]">5 Items</p>
                                </div>
                                <Image src="/gaming-pc.png" alt="Gaming PC" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-1 col-start-3 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Laptop Office</h6>
                                    <p className="text-[12px] text-[#666666]">22 Items</p>
                                </div>
                                <Image src="/laptop-office.png" alt="Laptop Office" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-1 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Laptop 15&#34;</h6>
                                    <p className="text-[12px] text-[#666666]">55 Items</p>
                                </div>
                                <Image src="/laptop-15.png" alt="Laptop" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-2 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">M1 2023</h6>
                                    <p className="text-[12px] text-[#666666]">32 Items</p>
                                </div>
                                <Image src="/m1.png" alt="M1 2023" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-3 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Second Hand</h6>
                                    <p className="text-[12px] text-[#666666]">16 Items</p>
                                </div>
                                <Image src="/secondhand.png" alt="Second Hand" width={50} height={50} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-[30px]">
                    <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">◀</button>
                    <div className="grid grid-cols-5 gap-4">
            
                        <div className="relative">
                            <div className="absolute top-3 left-3 bg-black text-white rounded-[10px] p-2 z-10">
                                <p className="text-[10px]">NEW</p>
                            </div>
                            <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                                <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
                            </div>
                            <Link href="/" className="flex justify-center items-center"><Image src="/laptopslider1.png" alt="Best Seller Headphones" width={190} height={200}/></Link>
                            <div className="pl-8">
                                <div className="flex text-yellow-400 gap-1 pb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                    ))}
                                    <p className="text-[#666666] text-[13px]">(152)</p>
                                </div>
                                <h4 className="text-[14px] font-bold">SROK Smart Phone 128GB, Oled Retina</h4>
                                <h3 className="text-[18px] font-semibold my-[10px]">$579.00 </h3>
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
                            <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                                <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
                            </div>
                            <Link href="/" className="flex justify-center items-center"><Image src="/laptopslider2-1.png" alt="Best Seller Tablet" width={190} height={200}/></Link>
                            <div className="pl-8">
                                <div className="flex text-yellow-400 gap-1 pb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                    ))}
                                    <p className="text-[#666666] text-[13px]">(152)</p>
                                </div>
                                <h4 className="text-[14px] font-bold">aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB</h4>
                                <h3 className="text-[18px] font-semibold my-[10px]">$979.00 </h3>
                                <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                                <div className="py-2 gap-2 flex items-center">
                                    <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                                    <span className="text-[12px]">In stock</span>
                                </div>
                                <div className="py-2 flex items-center">
                                    <Link href="/"><Image src="/laptopslider2-1.png" alt="Best Seller Headphones" width={40} height={40} /></Link>
                                    <Link href="/"><Image src="/laptopslider2-2.jpg" alt="Best Seller Headphones" width={40} height={40} /></Link>
                                </div>
                            </div>
                        </div>
                    
                        <div className="relative">
                            <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                                <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
                            </div>
                            <Link href="/" className="flex justify-center items-center"><Image src="/laptopslider3.png" alt="Best Seller Mini case" width={190} height={200}/></Link>
                            <div className="pl-8">
                                <div className="flex text-yellow-400 gap-1 pb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                                    ))}
                                    <p className="text-[#666666] text-[13px]">(5)</p>
                                </div>
                                <h4 className="text-[14px] font-bold">OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS</h4>
                                <h3 className="text-[18px] font-semibold my-[10px]">$1,259.00 </h3>
                                <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
                                <Link href="/" className="text-[#F1352B] text-[10px] p-3 rounded-[6px]">FREE GIFT</Link>
                                <div className="py-2 gap-2 flex items-center">
                                    <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                                    <span className="text-[12px]">In stock</span>
                                </div>
                            </div>
                        </div>
            
                        <div className="relative">
                            <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                                <p className="text-[10px]">SAVE</p>
                                <h6 className="text-[14px] font-medium">$59.00</h6>
                            </div>
                            <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                                <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
                            </div>
                            <Link href="/" className="flex justify-center items-center"><Image src="/laptopslider4.png" alt="Best Seller Watch" width={190} height={200}/></Link>
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
                                <p className="text-[10px] p-3">$2.98 SHIPPING</p>
                                <p className="text-[12px]  pt-3">CONTACT</p>
                            </div>
                        </div>
            
                        <div className="relative">
                            <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
                                <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
                            </div>
                            <Link href="/" className="flex justify-center items-center"><Image src="/laptopslider5.png" alt="Best Seller Charger" width={190} height={200}/></Link>
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
                            </div>
                        </div>
            
                    </div>
                    <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">▶</button>
                </div>
            </div>
        </div>
    );
}