"use client"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function AlertMessage() {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
       <div className="flex justify-between items-center bg-[#DFECDF] p-4 rounded-[10px]">
            <div className="py-2 gap-2 flex items-center">
                <FontAwesomeIcon icon={faCheck} className="bg-green-500 text-white w-[16px] h-[16px] p-[2px] rounded-full" />
                <span className="text-[12px]"><span className="font-bold">“Pinnapple Macbook Pro 2022 M1 / 512GB Dark Grey”</span> has been added to your cart.</span>
            </div>
            <button onClick={() => setShow(false)} className="ml-4 text-green-800 hover:text-green-600">
                <FontAwesomeIcon icon={faXmark} className="w-[16px] h-[16px]" />
            </button>
        </div>
    );
}
