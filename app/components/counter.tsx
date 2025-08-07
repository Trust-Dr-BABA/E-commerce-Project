"use client";
import { useState } from "react";

export default function Counter({ w = 15 }) {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ width: `${w}%` }}
      className="flex items-center justify-between gap-8 p-2 rounded-[10px] border border-[#999999] w-[15%]"
    >
      <button
        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
        className="text-[16px] font-bold cursor-pointer"
      >
        -
      </button>
      <span className="text-center text-[16px] font-bold">{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="text-[16px] font-bold cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
