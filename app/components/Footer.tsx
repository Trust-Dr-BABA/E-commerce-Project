import Image from "next/image";
import Link from 'next/link';

export default function Footer(){
  return(
    <div className="flex justify-center">
        <div className="container">
            <div className="flex justify-between text-[14px] w-[100%]">
                <span>© 2024 Shawonetc3 . All Rights Reserved</span>
                <div>
                    <Image src="/pay1.png" alt="pay1" width={13.41} height={15} className="inline mx-[10px]" />
                    <Image src="/pay2.png" alt="pay2" width={26.05} height={15} className="inline mx-[10px]" />
                    <Image src="/pay3.png" alt="pay3" width={40.58} height={15} className="inline mx-[10px]" />
                    <Image src="/pay4.png" alt="pay4" width={38.33} height={15} className="inline mx-[10px]" />
                    <Image src="/pay5.png" alt="pay5" width={71.53} height={15} className="inline mx-[10px]" />
                </div>
                <Link href="/" >Mobile Site</Link>
            </div>

        </div>
    </div>
  );
}