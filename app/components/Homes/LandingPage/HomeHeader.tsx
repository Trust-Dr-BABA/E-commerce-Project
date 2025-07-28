import Link from 'next/link';
import Slider from "./Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLaptop, faChevronRight, faServer, faMobileAlt, faTabletAlt, faGamepad, faWifi, faCamera, faVolumeUp, faPrint, faHdd, faHeadphones, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function HomeHeader() {
  return (
    <div className="w-full pt-4">
      <div className="grid grid-cols-4 gap-4 h-full">
        <div className="col-span-1 h-full flex flex-col justify-between px-[30px] py-[25px] bg-white rounded-[10px]">
          <p className="text-[#F1352B] font-bold text-[14px]"><FontAwesomeIcon icon={faFire} className="w-[16.2px] h-[16px]"/> SALE 40% OFF</p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLaptop} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Laptops</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faServer} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">PC & Computers</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMobileAlt} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Cell Phones</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTabletAlt} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Tablets</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGamepad} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Gaming & VR</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faWifi} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Networking</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCamera} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Cameras</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faVolumeUp} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Sounds</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPrint} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Office</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faHdd} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Storage, USB</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faHeadphones} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Accessories</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
          <p className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faBolt} className="w-[16.2px] h-[16px]"/>
              <Link href="/" className="font-semibold text-[13px]">Clearance</Link>
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
          </p>
        </div>
        <div className="col-span-2 grid grid-rows-3 grid-cols-2 gap-4">
          <div className="row-start-1 row-end-3 col-span-2">
            <Slider />
          </div>
          <div className="row-start-3 col-start-1 bg-[url('/homeheader-middle-left.png')] bg-cover bg-center h-full w-full rounded-[10px]">
            <div className="pl-[25px] pt-[20px]">
              <h6 className="w-[125px] mb-[30px] font-medium">Sony Playgo 5 from <span className="text-green-400">$569</span></h6>
              <Link href="/" className="underline">DISCOVER NOW</Link>
            </div>
          </div>
          <div className="row-start-3 col-start-2 bg-[url('/homeheader-middle-right.png')] bg-cover bg-center h-full w-full rounded-[10px]">
            <div className="pl-[25px] pt-[20px] text-white">
              <h6 className="w-[125px] mb-[30px]">Logitek Bluetooth <span className="text-yellow-400">Keyboard</span></h6>
              <p>Best for all device</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <div className="row-start-1 bg-[url('/homeheader-right-top.png')] bg-cover bg-center h-full w-full rounded-[10px] flex flex-col justify-center">
            <div className="ml-[290px]">
              <p className="text-[10px]">XOMIA</p>
              <h6 className="text-[19px] font-semibold pb-[30px] pt-1 w-[110px]">Sport Water Resistance Watch</h6>
              <Link href="/" className="bg-[#333333] text-white p-3 rounded-[10px]">SHOP NOW</Link>
            </div>
          </div>
          <div className="row-start-2 bg-[url('/homeheader-right-bottom.png')] bg-cover bg-center h-full w-full rounded-[10px]">
            <div className="pl-[40px] pt-[20px]">
              <h6 className="text-[23px] text-white w-[110px] mb-[30px]"><span className="font-bold">OKODO </span>HERO11+ BLACK</h6>
              <p className="text-[10px] text-[#999999]">FROM</p>
              <h5 className="text-[#1ABA1A] text-[24px]">$169</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}