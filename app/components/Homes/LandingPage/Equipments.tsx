import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Equipments() {
    return (
        <div className="grid grid-cols-3 gap-4">

            <div className="bg-white rounded-[10px] p-8">
                <div className="flex justify-between items-center">
                    <h6 className="text-[18px] font-bold">AUDIOS & CAMERAS</h6>
                    <Link href="/" className="text-[13px] text-[#666666]">View All 
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>
                <div className="bg-[url('/audio-banner.png')] bg-cover bg-center h-[190px] w-full rounded-[10px] my-8">
                    <h6 className="text-white text-[18px] font-bold pt-8 pl-14 w-[10%]">Best Speaker 2023</h6>
                </div>
                <div className="border-t border-[#999999] grid grid-col-2 grid-row-2 gap-8 py-8">
                    <div className="row-start-1 col-start-1">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/speaker.png" alt="Speaker" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Speaker</h6>
                                <p className="text-[12px] text-[#666666]">12 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-1 col-start-2">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/dslr-camera.png" alt="DSLR Camera" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">DSLR Camera</h6>
                                <p className="text-[12px] text-[#666666]">9 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-2 col-start-1">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/earbuds.png" alt="Earbuds" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Earbuds</h6>
                                <p className="text-[12px] text-[#666666]">5 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-2 col-start-2">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/microphone.png" alt="Microphone" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Microphone</h6>
                                <p className="text-[12px] text-[#666666]">12 Items</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[10px] p-8">
                <div className="flex justify-between items-center">
                    <h6 className="text-[18px] font-bold">GAMING</h6>
                    <Link href="/" className="text-[13px] text-[#666666]">View All 
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>
                <div className="bg-[url('/gaming-banner.png')] bg-cover bg-center h-[190px] w-full rounded-[10px] my-8">
                    <h6 className="text-[18px] font-bold pt-8 pl-14 w-[35%]">WIRELESS RGB GAMING MOUSE</h6>
                </div>
                <div className="border-t border-[#999999] grid grid-col-2 grid-row-2 gap-8 py-8">
                    <div className="row-start-1 col-start-1">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/monitor.png" alt="Monitor" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Monitors</h6>
                                <p className="text-[12px] text-[#666666]">28 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-1 col-start-2">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/chair.png" alt="Chair" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Chair</h6>
                                <p className="text-[12px] text-[#666666]">12 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-2 col-start-1">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/controller.png" alt="Controller" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Controller</h6>
                                <p className="text-[12px] text-[#666666]">9 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-2 col-start-2">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/keyboards.png" alt="Keyboards" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Keyboards</h6>
                                <p className="text-[12px] text-[#666666]">30 Items</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[10px] p-8">
                <div className="flex justify-between items-center">
                    <h6 className="text-[18px] font-bold">OFFICE EQUIPMENTS</h6>
                    <Link href="/" className="text-[13px] text-[#666666]">View All 
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>
                <div className="bg-[url('/office-banner.png')] bg-cover bg-center h-[190px] w-full rounded-[10px] my-8">
                    <div className="text-white flex flex-col items-center pt-8">
                        <p className="text-[10px] text-[#CCCCCC]">Home Thearther 4k</p>
                        <h6 className="text-[24px] font-semibold">Laser Projector</h6>
                    </div>
                </div>
                <div className="border-t border-[#999999] grid grid-col-2 grid-row-2 gap-8 py-8">
                    <div className="row-start-1 col-start-1">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/printer.png" alt="Printer" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Printers</h6>
                                <p className="text-[12px] text-[#666666]">9 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-1 col-start-2">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/network.png" alt="Network" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Networks</h6>
                                <p className="text-[12px] text-[#666666]">90 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-2 col-start-1">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/security.png" alt="Security" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Security</h6>
                                <p className="text-[12px] text-[#666666]">12 Items</p>
                            </div>
                        </Link>
                    </div>
                    <div className="row-start-2 col-start-2">
                        <Link href="/" className="flex flex-col justify-center items-center">
                            <Image src="/projectors.png" alt="projector" width={120} height={120} />
                            <div>
                                <h6 className="text-[14px] font-bold">Projectors</h6>
                                <p className="text-[12px] text-[#666666]">12 Items</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}