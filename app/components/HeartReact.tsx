"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function HeartButton({ hb = 14, wb = 14, hi = 14, wi = 14 }) {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} style={{ height: `${hb}px`, width: `${wb}px` }}  className={`absolute top-3 right-3 z-10 bg-[#E2E4EB] cursor-pointer rounded-full flex justify-center items-center ${ liked ? "text-red-500" : "text-black" } transition-colors duration-200`}>
      <FontAwesomeIcon icon={faHeart} style={{ height: `${hi}px`, width: `${wi}px` }}/>
    </button>
  );
}