'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Account info' },
        { id: 'tab2', label: 'My order' },
        { id: 'tab3', label: 'My address' },
        { id: 'tab4', label: 'Change password' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'tab1':
                return(
                    <div>
                        <h4 className="text-[24px] font-bold">Account Info</h4>
                        <div className="flex gap-4 mt-8">
                            <div className="flex flex-col flex-1">
                                <label htmlFor="text" className="text-[14px]">First Name <span className="text-red-500">*</span></label>
                                <input type="text" defaultValue="Mark" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <label htmlFor="text" className="text-[14px]">Last Name <span className="text-red-500">*</span></label>
                                <input type="text" defaultValue="Cole" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="email" className="text-[14px]">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" defaultValue="swoo@gmail.com" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6 mb-14">
                            <label htmlFor="text" className="text-[14px]">Phone Number <span className="text-[#666666]">(Optional)</span></label>
                            <input type="text" defaultValue="+1 0231 4554 452" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <Link href="/" className="text-white bg-[#1ABA1A] rounded-[10px] py-4 px-10 text-[14px] w-[125px]">SAVE</Link>
                    </div>
                );
            case 'tab2':
                return(
                    <div></div>
                );
            case 'tab3':
                return(
                    <div></div>
                );
            case 'tab4':
                return(
                    <div></div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="my-4 bg-white p-8 rounded-[10px] flex gap-6">
            <div className="flex flex-col p-6 w-[30%]">
                <Image src="/avatar.jpg" alt="avatar" width={215} height={220} className="rounded-[10px]"/>
                <h5 className="text-[20px] font-bold mt-4">Mark Cole</h5>
                <Link href="/" className="text-[14px] text-[#666666] my-6">swoo@gmail.com</Link>
 
                {tabs.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center justify-between text-[14px] p-4 rounded-[8px] mb-2 transition-all ${activeTab === tab.id ? 'bg-[#1ABA1A] text-white' : 'hover:bg-green-100'} `}>
                        {tab.label}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                ))}
            </div>

            <div className="w-full">
                {renderContent()}
            </div>
        </div>
    );
}