import Link from "next/link";
import Image from "next/image";
import HeartButton from "@/app/components/HeartReact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faAngleLeft,
  faStar,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Body() {
  const categories = [
    "All",
    "Iphone",
    "Samsung",
    "Xiaomi",
    "Asus",
    "Oppo",
    "Gaming Smartphone",
    "Ipad",
    "Windo Tablets",
    "eReader",
    "Smartphone Chargers",
    "5G Support Smartphone",
    "Smartphone Accessories",
    "Tablets Accessories",
  ];

  return (
    <div className=" grid grid-cols-[20%_80%] gap-8 p-8 bg-white rounded-[10px]">
      <div className="space-y-2">
        <div className="bg-[#EEEFF6] rounded-[10px] p-8">
          <h6 className="text-[18px] font-bold">CATEGORIES</h6>
          <Link
            href="/"
            className="flex gap-2 my-4 p-4 bg-white rounded-[10px]"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-2 h-2" />
            <p className="text-[12px] font-bold">All Categories</p>
          </Link>
          <h6 className="text-[14px] font-bold">Cell Phones & Tablets</h6>
          <ul className="text-[16px] text-gray-700 pl-4 pt-4">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="block rounded-[8px] pb-1 transition cursor-pointer"
                >
                  {category}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 rounded-[8px] transition cursor-pointer"
              >
                Cell Phones
                <FontAwesomeIcon icon={faAngleLeft} />
                $200
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-[#EEEFF6] rounded-[10px] p-8"></div>
        <div className="bg-[url('/homeheader-right-bottom.png')] bg-cover bg-center w-full rounded-[10px]">
          <div className="pl-[40px] py-[20px]">
            <h6 className="text-[23px] text-white w-[110px] mb-[25px]">
              <span className="font-bold">OKODO </span>HERO11+ BLACK
            </h6>
            <p className="text-[10px] text-[#999999]">FROM</p>
            <h5 className="text-[#1ABA1A] text-[24px]">$169</h5>
          </div>
        </div>
      </div>
      <div className="pr-8">
        <h6 className="text-[18px] font-bold">BEST SELLER IN THIS CATEGORY</h6>
        <div className="flex items-center mt-[30px] border-b border-[#CCCCCC] pb-[200px]">
          <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">
            ◀
          </button>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                <p className="text-[10px]">SAVE</p>
                <h6 className="text-[14px] font-medium">$199.00</h6>
              </div>
              <HeartButton hb={30} wb={30} hi={14} wi={14} />
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/bestseller-tablet.png"
                  alt="Best Seller Tablet"
                  width={190}
                  height={200}
                />
              </Link>
              <div className="pl-8">
                <div className="flex text-yellow-400 gap-1 pb-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-[20px]"
                    />
                  ))}
                  <p className="text-[#666666] text-[13px]">(152)</p>
                </div>
                <h4 className="text-[14px] font-bold">
                  OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS
                </h4>
                <div className="flex my-[10px] items-center gap-2">
                  <h3 className="text-[18px] text-[#F1352B] font-semibold">
                    $569.00{" "}
                  </h3>
                  <h3 className="text-[#666666] text-[14px] font-semibold line-through">
                    $759.00
                  </h3>
                </div>
                <Link
                  href="/"
                  className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]"
                >
                  FREE SHIPPING
                </Link>
                <div className="py-2 gap-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full"
                  />
                  <span className="text-[12px]">In stock</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                <p className="text-[10px]">SAVE</p>
                <h6 className="text-[14px] font-medium">$59.00</h6>
              </div>
              <HeartButton hb={30} wb={30} hi={14} wi={14} />
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/bestseller-case.png"
                  alt="Best Seller Mini case"
                  width={190}
                  height={200}
                />
              </Link>
              <div className="pl-8">
                <div className="flex text-yellow-400 gap-1 pb-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-[20px]"
                    />
                  ))}
                  <p className="text-[#666666] text-[13px]">(8)</p>
                </div>
                <h4 className="text-[14px] font-bold">
                  uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB
                </h4>
                <div className="flex my-[10px] items-center gap-2">
                  <h3 className="text-[18px] text-[#F1352B] font-semibold">
                    $569.00{" "}
                  </h3>
                  <h3 className="text-[#666666] text-[14px] font-semibold line-through">
                    $759.00
                  </h3>
                </div>
                <Link
                  href="/"
                  className="text-[#1ABA1A] text-[10px] p-3 rounded-[6px]"
                >
                  FREE SHIPPING
                </Link>
                <div className="py-2 gap-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="bg-red-500 text-white w-[16px] h-[16px] p-[2px] rounded-full"
                  />
                  <span className="text-[12px]">Out of stock</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <HeartButton hb={30} wb={30} hi={14} wi={14} />
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/bestseller-watch.png"
                  alt="Best Seller Watch"
                  width={190}
                  height={200}
                />
              </Link>
              <div className="pl-8">
                <div className="flex text-yellow-400 gap-1 pb-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-[20px]"
                    />
                  ))}
                  <p className="text-[#666666] text-[13px]">(12)</p>
                </div>
                <h4 className="text-[14px] font-bold">
                  Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with
                  Milanese Loop
                </h4>
                <h3 className="text-[18px] font-semibold my-[10px]">
                  $979.00 - $1,259.00
                </h3>
                <p className="text-[10px] p-3">$2.98 SHIPPING</p>
                <p className="text-[12px]">PRE - ORDER</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-3 bg-[#1ABA1A] text-white rounded-[10px] p-2 z-10">
                <p className="text-[10px]">SAVE</p>
                <h6 className="text-[14px] font-medium">$3.00</h6>
              </div>
              <HeartButton hb={30} wb={30} hi={14} wi={14} />
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/bestseller-charger.png"
                  alt="Best Seller Charger"
                  width={190}
                  height={200}
                />
              </Link>
              <div className="pl-8">
                <div className="flex text-yellow-400 gap-1 pb-2">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-[20px]"
                    />
                  ))}
                  <p className="text-[#666666] text-[13px]">(9)</p>
                </div>
                <h4 className="text-[14px] font-bold">iSmart 24V Charger</h4>
                <div className="flex my-[10px] items-center gap-2">
                  <h3 className="text-[18px] text-[#F1352B] font-semibold">
                    $569.00{" "}
                  </h3>
                  <h3 className="text-[#666666] text-[14px] font-semibold line-through">
                    $759.00
                  </h3>
                </div>
                <p className="text-[10px] p-3">$3.98 SHIPPING</p>
                <p className="text-[12px]">CONTACT</p>
              </div>
            </div>
          </div>
          <button className="text-black bg-[#EDEFF6] rounded-[6px] w-[40px] h-[80px]">
            ▶
          </button>
        </div>
        <div>
            <div className="grid grid-cols-4 ">
                
            </div>
        </div>
      </div>
    </div>
  );
}
