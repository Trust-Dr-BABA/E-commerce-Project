import Link from "next/link";
import Image from "next/image";

export default function BrandNew() {
  return (
    <div className="bg-white rounded-[10px]">
        <div className="p-8">
            <div className="flex justify-between items-center">
                <h6 className="text-[18px] font-bold">BRAND NEW FOR YOU</h6>
                <div className="flex items-center justify-between gap-3 bg-[#EBEDF3] rounded-full p-2 w-[70px]">
                    <button className="text-black">◀</button>
                    <button className="text-black">▶</button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                <div>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandnew1.jpg" alt="Brand New" width={300} height={230} className="rounded-[10px]"/></Link>
                    <h6 className="font-bold text-[16px] py-3">Zumac Steel Computer Case</h6>
                    <p className="text-[13px] text-[#666666] pb-4">And an option to upgrade every three years</p>
                    <Link href="/" className="text-[#1ABA1A] border-[#1ABA1A] border rounded-[10px] p-3 text-[11px]">SHOP NOW</Link>
                </div>
                <div>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandnew2.jpg" alt="Brand New" width={300} height={230} className="rounded-[10px]"/></Link>
                    <h6 className="font-bold text-[16px] py-3">Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.</h6>
                    <p className="text-[13px] text-[#666666] pb-4">Limited time offer. Hurry up</p>
                    <Link href="/" className="text-[#1ABA1A] border-[#1ABA1A] border rounded-[10px] p-3 text-[11px]">SHOP NOW</Link>
                </div>
                <div>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandnew3.jpg" alt="Brand New" width={300} height={230} className="rounded-[10px]"/></Link>
                    <h6 className="font-bold text-[16px] py-3">Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.</h6>
                    <p className="text-[13px] text-[#666666] pb-4">Limited time offer. Hurry up</p>
                    <Link href="/" className="text-[#1ABA1A] border-[#1ABA1A] border rounded-[10px] p-3 text-[11px]">SHOP NOW</Link>
                </div>
                <div>
                    <Link href="/" className="flex justify-center items-center"><Image src="/brandnew4.jpg" alt="Brand New" width={300} height={230} className="rounded-[10px]"/></Link>
                    <h6 className="font-bold text-[16px] py-3">iPad Pro Mini 6 - Powerful l in hand</h6>
                    <p className="text-[13px] text-[#666666] pb-4">From $19.99/month for 36 months. $280.35 final payment due in month 37</p>
                    <Link href="/" className="text-[#1ABA1A] border-[#1ABA1A] border rounded-[10px] p-3 text-[11px]">SHOP NOW</Link>
                </div>
            </div>
        </div>
    </div>
  );
}