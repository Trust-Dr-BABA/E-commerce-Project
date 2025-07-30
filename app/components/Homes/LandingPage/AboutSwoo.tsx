import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className="my-14 flex justify-center">
            <div className="w-[70%] px-4">
                <p className="text-[18px] font-bold">Swoo - #1 Online Marketplace for technology</p>
                <p className="text-[14px] text-[#666666] py-6">Swoo is the #1 online destination for all things tech. Whether you&#39;re searching for the latest gadgets, top-tier components, or reliable accessories, Swoo brings you a wide range of high-quality technology products at competitive prices. Designed for tech enthusiasts, professionals, and everyday users alike, our platform ensures a seamless shopping experience with trusted sellers, verified reviews, and secure transactions.</p>
                <p className="text-[14px] text-[#666666] pb-6">We don&#39;t just connect buyers and sellers — we build a trusted ecosystem for technology lovers. At Swoo, you’ll discover curated collections, exclusive deals, and detailed product insights to help you make informed decisions. From smartphones and laptops to smart home devices and gaming gear, our marketplace is tailored to meet the fast-changing demands of today&#39;s digital world. Join thousands of satisfied users and experience the future of online tech shopping with Swoo.</p>
                <Link href="/" className="text-[13px]">View All 
                    <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                </Link>
            </div>
        </div>
    );
}