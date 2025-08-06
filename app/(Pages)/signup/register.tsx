"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="bg-white rounded-[10px] flex">
            <div className="hidden md:flex md:w-1/2 py-45 flex justify-center items-center">
                <Image src="/login.png" alt="Login" width={400} height={330} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
                <h3 className="text-[28px] font-bold text-[#1ABA1A] pb-[10px]">Register</h3>
                <p className="text-[14px] text-[#999999]">JOIN US</p>
                <div className="flex flex-col mt-8">
                    <label htmlFor="text" className="text-[14px]">Your name</label>
                    <input type="text" id="name" placeholder="Jhon Deo" className="mt-2 p-2 md:w-[80%] rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                </div>
                <div className="flex flex-col mt-6">
                    <label htmlFor="email" className="text-[14px]">Email Address</label>
                    <input type="email" placeholder="Example@gmail.com" className="mt-2 p-2 md:w-[80%] rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                </div>
                <div className="flex flex-col mt-6">
                    <label htmlFor="password" className="text-[14px]">Password</label>
                    <div className="mt-2 p-2 md:w-[80%] rounded-[6px] border border-[#CCCCCC] flex items-center">
                        <input type={visible ? "text" : "password"} placeholder="...." className="focus:outline-none w-full flex-grow"/>
                        <button type="button" onClick={() => setVisible(!visible)} className="text-gray-400 hover:text-gray-600 ml-2 shrink-0">
                            <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mt-6">
                    <label htmlFor="password" className="text-[14px]">Confirm Password</label>
                    <div className="mt-2 p-2 md:w-[80%] rounded-[6px] border border-[#CCCCCC] flex items-center">
                        <input type={visible ? "text" : "password"} id="password" placeholder="...." className="focus:outline-none w-full flex-grow"/>
                        <button type="button" onClick={() => setVisible(!visible)} className="text-gray-400 hover:text-gray-600 ml-2 shrink-0">
                            <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                <Link href="/" className="text-white bg-[#1ABA1A] rounded-[10px] py-3 px-10 text-[14px] w-[125px] mt-10 mb-4 flex justify-center items-center">REGISTER</Link>
                <p className="text-[13px] text-[#999999]">ALREADY USER ? <Link href="/login" className="text-[#1ABA1A]">LOGIN</Link></p>
            </div>
        </div>
    );
}