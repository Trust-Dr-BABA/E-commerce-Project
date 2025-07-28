import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function FeaturedTop() {
    return (
        <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="col-span-1 bg-white rounded-[10px] px-[30px] py-[30px]">
                <div className="flex justify-between">
                    <h6 className="font-bold text-[18px]">FEATURED BRANDS</h6>
                    <Link href="/" className="text-[13px] text-[#666666]">View All 
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>
                <div className="grid grid-cols-5 grid-row-2 gap-4 mt-[30px]">
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo1.png" alt="brandlogo1" width={97} height={35}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo2.png" alt="brandlogo2" width={80} height={30}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo3.png" alt="brandlogo3" width={82} height={33}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo4.png" alt="brandlogo4" width={90} height={25}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo5.png" alt="brandlogo5" width={58} height={15}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo6.png" alt="brandlogo6" width={92} height={13}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo7.png" alt="brandlogo7" width={70} height={25}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo8.png" alt="brandlogo8" width={87} height={35}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo9.png" alt="brandlogo9" width={80} height={30}/></Link>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandlogo10.png" alt="brandlogo10" width={60} height={23}/></Link>
                </div>
            </div>
            <div className="col-span-1 bg-white rounded-[10px] px-[30px] py-[30px]">
                <div className="flex justify-between">
                    <h6 className="font-bold text-[18px]">TOP CATEGORIES</h6>
                    <Link href="/" className="text-[13px] text-[#666666]">View All
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-[30px]">
                    <Link href="/" className="flex flex-col justify-center items-center">
                        <Image src="/laptops.png" alt="laptops" width={113} height={60} className="h-[60px] w-auto"/>
                        <p className="font-semibold text-[14px] text-center mt-2">Laptops</p>
                    </Link>
                    <Link href="/" className="flex flex-col justify-center items-center">
                        <Image src="/pc gaming.png" alt="pc gaming" width={113} height={60} className="h-[60px] w-auto"/>
                        <p className="font-semibold text-[14px] text-center mt-2">PC Gaming</p>
                    </Link>
                    <Link href="/" className="flex flex-col justify-center items-center">
                        <Image src="/headphones.png" alt="headphones" width={113} height={60} className="h-[60px] w-auto"/>
                        <p className="font-semibold text-[14px] text-center mt-2">Headphones</p>
                    </Link>
                    <Link href="/" className="flex flex-col justify-center items-center">
                        <Image src="/monitors.png" alt="monitors" width={113} height={60} className="h-[60px] w-auto"/>
                        <p className="font-semibold text-[14px] text-center mt-2">Monitors</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}