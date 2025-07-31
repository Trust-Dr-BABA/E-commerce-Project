import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Subscribe() {
    return (
        <div className="flex flex-row justify-between space-x-3 mt-[60px] mb-[80px]">
            <div className="w-[15%] flex justify-center items-start gap-4">
                <select>
                    <option value="usd">USD</option>
                </select>
                <div className="flex">
                    <Image src="/us-flag.png" alt="US Flag" width={15} height={15} className="h-[15px] w-auto" />
                    <select>
                        <option value="english">ENG</option>
                    </select>
                </div>
            </div>
            <div className="w-[65%]">
                <p className="text-[18px] font-bold  mb-[30px]">SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER</p>
                <div className="w-[100%] h-[41px]">
                    <FontAwesomeIcon icon={faEnvelope} className="w-[20px] h-[20px] pr-1"/>
                    <input type="email" placeholder="Enter your email address" className="w-[80%] h-full focus:outline-none"/>
                    <button className="text-[#1ABA1A] font-bold">SUBSCRIBE</button>
                </div>
                <p className="text-[13px] italic text-[#666666]">By subscribing, you&#39;re accepted the our <span className="underline text-black">Policy</span></p>
            </div>
        </div>
    );
}