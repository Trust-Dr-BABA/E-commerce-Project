import Image from "next/image";

export default function Membership() {
  return (
    <div className="flex justify-center items-center text-white my-4 p-6 gap-2 rounded-[10px] bg-[url('/membership-banner.png')] bg-cover bg-center h-full w-full rounded-[10px]">
      <h6><Image src="/star.png" alt="star" width={30} height={30} /></h6>
      <h6 className="text-[18px]">Member get </h6>
      <h6 className="text-[18px] font-bold text-[#ff993d]">FREE SHIPPING</h6>
      <h6 className="text-[18px] italic"> with no order minimum!. Restriction apply </h6>
      <h6 className="text-[14px] underline">Try free 30-days trial!</h6>
    </div>
  );
}