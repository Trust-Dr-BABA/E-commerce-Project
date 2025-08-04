import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
        <div className="bg-white p-8 rounded-[10px] mt-4">
            <div className="bg-[url('/aboutbanner1.png')] bg-cover bg-center w-full rounded-[10px] py-20 px-30">
                <h1 className="text-[45px] font-bold pb-7 w-[23%]">Best experience <span className="font-normal">always wins</span></h1>
                <p className="text-[14px] text-[#666666] w-[20%]">#1 Online Marketplace for Electronic & Technology in Mahanttan, CA</p>
            </div>
            <div className="flex justify-around p-14">
                <h6 className="text-[18px] font-bold w-[17%]">OUR PURPOSE IS TO <span className="text-[#1ABA1A]">ENRICH AND ENHANCE LIVES</span> THROUGH TECHNOLOGY</h6>
                <div className="flex justify-between items-center">
                    <div className="w-[20%]">
                        <h2 className="text-[40px] font-bold">$12,5M</h2>
                        <p className="text-[12px] text-[#666666]">TOTAL REVENUE FROM 2001 - 2023</p>
                    </div>
                    <div className="w-[25%]">
                        <h2 className="text-[40px] font-bold">12K+</h2>
                        <p className="text-[12px] text-[#666666]">ORDER DELIVERED SUCCESSFUL ON EVERYDAY</p>
                    </div>
                    <div className="w-[22%]">
                        <h2 className="text-[40px] font-bold">725+</h2>
                        <p className="text-[12px] text-[#666666]">STORE AND OFFICE IN U.S AND WORLDWIDE</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className="w-full rounded-[10px] overflow-hidden"><Image src="/about2.png" alt="about" width={645} height={420} className="w-full h-full"/></div>
                <div className="bg-[#E2E4Eb] rounded-[10px] p-6 md:p-12 flex flex-col justify-center">
                    <h6 className="text-[18px] font-bold mb-4">We connect millions of buyers and sellers around the world, empowering people & creating economic opportunity for all.</h6>
                    <p className="text-[14px] text-[#666666] mb-6">Within our markets, millions of people around the world connect, both online and offline, to make, sell and buy unique goods. We also offer a wide range of Seller Services and tools that help creative entrepreneurs start, manage & scale their businesses.</p>
                    <Link href="/" className="text-white bg-[#1ABA1A] rounded-[10px] py-3 px-8 text-[14px] w-fit">SEND MESSAGE</Link>
                </div>
            </div>
        </div>
    </div>
  );
}