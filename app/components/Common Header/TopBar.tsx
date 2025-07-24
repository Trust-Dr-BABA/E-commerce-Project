import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {
    return(
        <div className="flex justify-between text-[14px] mt-[10px] mx-[30px]">
            <div className="space-x-2 flex justify-center">
                <div className="pl-[10px]">
                    <FontAwesomeIcon icon={faPhoneVolume} className="w-[12.2px] h-[12px] mr-[5px]" />
                    <span>Hotline 24/7</span>
                </div>
                <span className="font-bold"> (025) 3888 25 16</span>
            </div>
            <div className="space-x-2">
                <Link href="/" >Sell on Swoo</Link>
                <Link href="/" >Order Tracking</Link>
                <select>
                    <option value="usd">USD</option>
                </select>
                <select>
                    <option value="english">ENG</option>
                </select>
            </div>
        </div>
    );
}