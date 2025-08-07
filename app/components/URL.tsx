"use client";
import { usePathname } from "next/navigation";

export default function URL() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const lastIndex = segments.length - 1;

  return (
    <p className="hidden lg:flex text-lg p-8 bg-white rounded-[10px]">
      <span className="text-gray-500">home</span>
      {segments.map((seg, i) => (
        <span key={i}>
          <span className="text-black"> / </span>
          <span className={i === lastIndex ? "text-black" : "text-gray-500"}>
            {seg}
          </span>
        </span>
      ))}
    </p>
  );
}
