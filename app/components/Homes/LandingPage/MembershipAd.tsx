import Image from "next/image";

export default function Membership() {
  return (
    <div className="flex justify-center items-center mt-4 p-6 gap-2 rounded-[10px]">
      <h6><Image src="/star.png" alt="star" width={30} height={30} /></h6>
      <h6 className="text-[18px] text-gray-600">Member get </h6>
      <h6 className="text-[18px] font-bold text-[#ff993d]">FREE SHIPPING</h6>
      <h6 className="text-[18px] italic text-gray-500"> with no order minimum!. Restriction apply </h6>
      <h6 className="text-[18px] font-semibold text-[#1ABA1A]">Try free 30-days trial!</h6>
    </div>
  );
}