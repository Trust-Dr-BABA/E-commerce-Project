

export default function CashBack() {
    return (
        <div className="grid grid-cols-2 gap-4 my-4">
            <div className="col-span-1 bg-[url('/cashback1.png')] bg-cover bg-center h-full w-full rounded-[10px]">
                <div className="py-10 pl-[70%]">
                    <p className="text-[40px] font-bold text-[#FFE400]">10% Back</p>
                    <p className="text-[14px] text-white w-[155px]">Earn 10% Cash back on Swootech. <span className="underline">Learn How</span></p>
                </div>
            </div>
            <div className="col-span-1 p-8 bg-[url('/cashback2.png')] bg-cover bg-center h-full w-full rounded-[10px]">
                <p className="text-[24px] text-white pb-4">Download our app</p>
                <p className="text-[12px] text-[#CCCCCC] pb-2">Enter your phone number and we&#39;ll send you a download link.</p>
                <div className="w-[100%] h-[41px] bg-white flex justify-center items-center rounded-[10px]">
                    <input type="email" placeholder="(+xx) xxx..." className="w-[80%]"/>
                    <button className="text-[#1ABA1A] font-bold">SEND LINK</button>
                </div>
            </div>
        </div>
    );
}