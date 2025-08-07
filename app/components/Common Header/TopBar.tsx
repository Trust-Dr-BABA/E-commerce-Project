import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
  return (
    <div className="hidden lg:flex flex-wrap justify-between items-center text-[14px] mt-2 mx-4 gap-2">
      <div className="gap-2 flex items-center">
        <div className="flex items-center py-1 px-2 bg-[#EBEEF6] rounded-md">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="w-[12px] h-[12px] mr-2 "
          />
          <span>Hotline 24/7</span>
        </div>
        <span className="font-bold whitespace-nowrap"> (025) 3888 25 16</span>
      </div>

      <div className="gap-3 flex items-center flex-wrap justify-end w-full sm:w-auto">
        <Link href="/" className="whitespace-nowrap">
          Sell on Swoo
        </Link>
        <Link href="/" className="whitespace-nowrap">
          Order Tracking
        </Link>
        <select className="border-r border-[#999999] pr-2 bg-transparent outline-none">
          <option value="usd">USD</option>
        </select>
        <div className="flex items-center gap-1">
          <Image
            src="/us-flag.png"
            alt="US Flag"
            width={15}
            height={15}
            className="h-[15px] w-auto"
          />
          <select>
            <option value="english">ENG</option>
          </select>
        </div>
      </div>
    </div>
  );
}
