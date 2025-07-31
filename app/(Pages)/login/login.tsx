"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="my-4 bg-white rounded-[10px] flex">
            <div className="w-[50%] py-30 flex justify-center items-center">
                <Image src="/login.png" alt="Login" width={400} height={330} />
            </div>
            <div className="w-[50%] flex flex-col justify-center">
                <h3 className="text-[28px] font-bold text-[#1ABA1A] pb-[10px]">Welcome Back</h3>
                <p className="text-[14px] text-[#999999]">LOGIN TO CONTINUE</p>
                <div className="flex flex-col mt-8">
                    <label htmlFor="email" className="text-[14px]">Email Address</label>
                    <input type="email" placeholder="Example@gmail.com" className="mt-2 p-2 w-[80%] rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                </div>
                <div className="flex flex-col mt-7">
                    <label htmlFor="password" className="text-[14px]">Password</label>
                    <div className="mt-2 p-2 w-[80%] rounded-[6px] border border-[#CCCCCC]">
                        <input type={visible ? "text" : "password"} placeholder="...." className="focus:outline-none w-[97%]"/>
                        <button type="button" onClick={() => setVisible(!visible)} className="text-gray-400 hover:text-gray-600">
                            <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                <Link href="/" className="text-[13px] text-[#999999] underline pt-1">Forget Password ?</Link>
                <Link href="/" className="text-white bg-[#1ABA1A] rounded-[10px] py-3 px-10 text-[14px] w-[125px] mt-10 mb-4">LOGIN</Link>
                <p className="text-[13px] text-[#999999]">NEW USER ? <Link href="/register" className="text-[#1ABA1A]">SIGN UP</Link></p>
            </div>
        </div>
    );
}