import Image from "next/image";
import Link from 'next/link';

export default function Copyright() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center text-sm w-full py-8 gap-4 text-center md:text-left border-t border-[#999999]">
            <span>© 2024 <span className="font-bold">Shawonetc3</span> . All Rights Reserved</span>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                <Image src="/pay1.png" alt="pay1" width={13.41} height={15} className="inline mx-[10px]" />
                <Image src="/pay2.png" alt="pay2" width={26.05} height={15} className="inline mx-[10px]" />
                <Image src="/pay3.png" alt="pay3" width={40.58} height={15} className="inline mx-[10px]" />
                <Image src="/pay4.png" alt="pay4" width={38.33} height={15} className="inline mx-[10px]" />
                <Image src="/pay5.png" alt="pay5" width={71.53} height={15} className="inline mx-[10px]" />
            </div>
            <Link href="/" className="underline text-blue-400">Mobile Site</Link>
        </div>
    );
}