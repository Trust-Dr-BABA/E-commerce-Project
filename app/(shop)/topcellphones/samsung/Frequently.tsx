import Link from "next/link"

export default function Frequently() {
  return (
    <div>
        <div className="flex pt-4 gap-4">
            <div className="w-[75%]"></div>
            <div className="grid grid-row-3 gap-4 w-[25%]">
                <Link href="/" className="bg-[url('/deal1.png')] bg-cover bg-center h-full w-full rounded-[10px]"></Link>
                <Link href="/" className="bg-[url('/deal2.png')] bg-cover bg-center h-full w-full rounded-[10px]"></Link>
            </div>
        </div>
    </div>
  );
}