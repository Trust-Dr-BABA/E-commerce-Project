import Link from 'next/link';
import Slider from "./Slider"

export default function HomeHeader() {
  return (
    <div className="w-full pt-4">
      <div className="grid grid-cols-4 gap-4 h-full">
        <div className="col-span-1">
          <p className="text-[#F1352B]">SALE 40% OFF</p>
        </div>
        <div className="col-span-2 grid grid-rows-3 grid-cols-2 gap-4">
          <div className="row-start-1 row-end-3 col-span-2">
            <Slider />
          </div>
          <div className="row-start-3 col-start-1 bg-[url('/homeheader-middle-left.png')] bg-cover bg-center h-full w-full rounded-[10px] shadow-lg">
            <div className="pl-[25px] pt-[20px]">
              <h6 className="w-[125px] mb-[30px] font-medium">Sony Playgo 5 from <span className="text-green-400">$569</span></h6>
              <Link href="/" className="underline">DISCOVER NOW</Link>
            </div>
          </div>
          <div className="row-start-3 col-start-2 bg-[url('/homeheader-middle-right.png')] bg-cover bg-center h-full w-full rounded-[10px] shadow-lg">
            <div className="pl-[25px] pt-[20px] text-white">
              <h6 className="w-[125px] mb-[30px]">Logitek Bluetooth <span className="text-yellow-400">Keyboard</span></h6>
              <p>Best for all device</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <div className="row-start-1 bg-[url('/homeheader-right-top.png')] bg-cover bg-center h-full w-full rounded-[10px] shadow-lg flex flex-col justify-center">
            <div className="ml-[290px]">
              <p className="text-[10px]">XOMIA</p>
              <h6 className="text-[19px] font-semibold pb-[30px] pt-1 w-[110px]">Sport Water Resistance Watch</h6>
              <Link href="/" className="bg-[#333333] text-white p-3 rounded-[10px]">SHOP NOW</Link>
            </div>
          </div>
          <div className="row-start-2 bg-[url('/homeheader-right-bottom.png')] bg-cover bg-center h-full w-full rounded-[10px] shadow-lg">
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