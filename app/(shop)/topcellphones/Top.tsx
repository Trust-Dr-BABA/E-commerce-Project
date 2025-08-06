import Image from "next/image";
import Link from "next/link";
import Slider from "@/app/components/Homes/LandingPage/Slider";

export default function Top() {
  return (
    <div>
      <div className="bg-white rounded-[10px] p-8">
        <h6 className="text-[18px] font-bold">TOP CELLPHONES & TABLETS</h6>
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-4 mt-8">
          <div className="">
            <Slider />
          </div>
          <div className="bg-[url('/cellphone-banner.png')] bg-cover bg-center rounded-[10px] flex items-center">
            <div className="p-6">
              <h5 className="text-[24px] font-bold w-[40%]">REDMI NOTE 12 PRO+ 5G</h5>
              <p className="text-[12px] py-2 mb-2">Rise to the challenge</p>
              <Link href="/" className="bg-black text-white px-4 py-2 rounded-[10px] text-sm">BUY NOW</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[10px] p-8 mt-4">
        <h6 className="text-[18px] font-bold">TOP CELLPHONES & TABLETS</h6>
        <div className="grid grid-col-5 grid-row-2 gap-12 mt-8">
                        <div className="row-start-1 col-start-1 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">iPhone (iOS)</h6>
                                    <p className="text-[12px] text-[#666666]">74 Items</p>
                                </div>
                                <Image src="/iphone.png" alt="iPhone" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-1 col-start-2 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Android</h6>
                                    <p className="text-[12px] text-[#666666]">35 Items</p>
                                </div>
                                <Image src="/android.png" alt="Android" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-1 col-start-3 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">5G Support</h6>
                                    <p className="text-[12px] text-[#666666]">12 Items</p>
                                </div>
                                <Image src="/5g-support.png" alt="5G Support" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-1 col-start-4 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Apple Tablets</h6>
                                    <p className="text-[12px] text-[#666666]">22 Items</p>
                                </div>
                                <Image src="/apple-tablets.png" alt="Apple Tablets" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-1 col-start-5 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Smartphone Chargers</h6>
                                    <p className="text-[12px] text-[#666666]">33 Items</p>
                                </div>
                                <Image src="/smartphone-charger.png" alt="Smartphone Chargers" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-1 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Gaming</h6>
                                    <p className="text-[12px] text-[#666666]">9 Items</p>
                                </div>
                                <Image src="/gaming-phone.png" alt="Gaming" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-2 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Xiaomi</h6>
                                    <p className="text-[12px] text-[#666666]">52 Items</p>
                                </div>
                                <Image src="/xiaomi.png" alt="Xiaomi" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-3 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Accessories</h6>
                                    <p className="text-[12px] text-[#666666]">29 Items</p>
                                </div>
                                <Image src="/accessories-phone.png" alt="Accessories" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-4 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">Samsung Tablets</h6>
                                    <p className="text-[12px] text-[#666666]">26 Items</p>
                                </div>
                                <Image src="/samsung-tablets.png" alt="Samsung Tablets" width={50} height={50} />
                            </Link>
                        </div>
                        <div className="row-start-2 col-start-5 flex items-center">
                            <Link href="/" className="flex justify-between items-center w-full">
                                <div>
                                    <h6 className="text-[14px] font-bold">eReader</h6>
                                    <p className="text-[12px] text-[#666666]">5 Items</p>
                                </div>
                                <Image src="/ereader.png" alt="eReader" width={50} height={50} />
                            </Link>
                        </div>
                    </div>
      </div>

    </div>
  );
}