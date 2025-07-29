import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar, faHeart, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function BestSeller() {
  return (
    <div className="bg-white p-8 rounded-[10px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-6 text-[18px]">
          <h6 className="font-semibold">BEST SELLER</h6>
          <h6>NEW IN</h6>
          <h6>POPULAR</h6>
        </div>
        <Link href="/" className="text-[13px] text-[#666666]">View All 
          <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
        </Link>
      </div>
      <div className="flex items-center mt-[30px]">
        <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">◀</button>
        <div className="grid grid-cols-5 gap-4">

          <div className="relative">
            <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
              <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
            </div>
            <Link href="/" className="flex justify-center items-center"><Image src="/bestseller-headphones1.png" alt="Best Seller Headphones" width={190} height={200}/></Link>
            <div className="pl-8">
              <div className="flex text-yellow-400 gap-1 pb-2">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                ))}
              <p className="text-[#666666] text-[13px]">(152)</p>
              </div>
              <h4 className="text-[14px] font-bold">BOSO 2 Wireless On Ear Headphone</h4>
              <h3 className="text-[18px] font-semibold my-[10px]">$569.00 </h3>
              <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
              <Link href="/" className="text-[#F1352B] text-[10px] p-3 rounded-[6px]">FREE GIFT</Link>
              <div className="py-2 gap-2 flex items-center">
                <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16spx] h-[16px] p-[2px] rounded-full" />
                <span className="text-[12px]">In stock</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
              <p className="text-[10px]">SAVE</p>
              <h6 className="text-[14px] font-medium">$199.00</h6>
            </div>
            <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
            </div>
            <Link href="/" className="flex justify-center items-center"><Image src="/bestseller-tablet.png" alt="Best Seller Tablet" width={190} height={200}/></Link>
            <div className="pl-8">
              <div className="flex text-yellow-400 gap-1 pb-2">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
                ))}
                <p className="text-[#666666] text-[13px]">(152)</p>
              </div>
              <h4 className="text-[14px] font-bold">OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS</h4>
              <div className="flex my-[10px] items-center gap-2">
                <h3 className="text-[18px] text-[#F1352B] font-semibold">$569.00 </h3>
                <h3 className="text-[#666666] text-[14px] font-semibold line-through">$759.00</h3>
              </div>
              <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
              <div className="py-2 gap-2 flex items-center">
                <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                <span className="text-[12px]">In stock</span>
              </div>
            </div>
          </div>
        

        <div className="relative">
          <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
            <p className="text-[10px]">SAVE</p>
            <h6 className="text-[14px] font-medium">$199.00</h6>
          </div>
          <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
          <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
          </div>
          <Link href="/" className="flex justify-center items-center"><Image src="/bestseller-case.png" alt="Best Seller Mini case" width={190} height={200}/></Link>
          <div className="pl-8">
            <div className="flex text-yellow-400 gap-1 pb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
              ))}
              <p className="text-[#666666] text-[13px]">(8)</p>
            </div>
            <h4 className="text-[14px] font-bold">uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB</h4>
            <div className="flex my-[10px] items-center gap-2">
              <h3 className="text-[18px] text-[#F1352B] font-semibold">$569.00 </h3>
              <h3 className="text-[#666666] text-[14px] font-semibold line-through">$759.00</h3>
            </div>
            <Link href="/" className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]">FREE SHIPPING</Link>
            <div className="py-2 gap-2 flex items-center">
                <FontAwesomeIcon icon={faXmark} className="bg-red-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                <span className="text-[12px]">Out of stock</span>
              </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
          </div>
          <Link href="/" className="flex justify-center items-center"><Image src="/bestseller-watch.png" alt="Best Seller Watch" width={190} height={200}/></Link>
          <div className="pl-8">
            <div className="flex text-yellow-400 gap-1 pb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
              ))}
              <p className="text-[#666666] text-[13px]">(12)</p>
            </div>
            <h4 className="text-[14px] font-bold">Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop</h4>
            <h3 className="text-[18px] font-semibold my-[10px]">$979.00 - $1,259.00</h3>
            <p className="text-[10px] p-3">$2.98 SHIPPING</p>
            <p className="text-[12px]">PRE - ORDER</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
            <p className="text-[10px]">SAVE</p>
            <h6 className="text-[14px] font-medium">$199.00</h6>
          </div>
          <div className="absolute top-3 right-3 z-10 bg-[#E2E4EB] rounded-full w-[30px] h-[30px] flex justify-center items-center">
          <FontAwesomeIcon icon={faHeart} className="w-[14.2px] h-[14px]"/>
          </div>
          <Link href="/" className="flex justify-center items-center"><Image src="/bestseller-charger.png" alt="Best Seller Charger" width={190} height={200}/></Link>
          <div className="pl-8">
            <div className="flex text-yellow-400 gap-1 pb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-[20px]" />
              ))}
              <p className="text-[#666666] text-[13px]">(9)</p>
            </div>
            <h4 className="text-[14px] font-bold">iSmart 24V Charger</h4>
            <div className="flex my-[10px] items-center gap-2">
              <h3 className="text-[18px] text-[#F1352B] font-semibold">$569.00 </h3>
              <h3 className="text-[#666666] text-[14px] font-semibold line-through">$759.00</h3>
            </div>
            <p className="text-[10px] p-3">$3.98 SHIPPING</p>
            <p className="text-[12px]">CONTACT</p>
          </div>
        </div>

        </div>
        <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">▶</button>
      </div>
    </div>
  );
}