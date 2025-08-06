import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faShippingFast, faMoneyBillWave, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {

    const yearData = [
        { year: 1997, text: "A small store located in Brooklyn Town, USA" },
        { year: 1998, text: "It is a long established fact that a reader will be distracted by the readable" },
        { year: 2000, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" },
        { year: 2002, text: "Lorem Ipsum has been the industry's standard dummy text ever since the" },
        { year: 2004, text: "Contrary to popular belief, Lorem Ipsum is not simply random text" },
        { year: 2005, text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here" },
        { year: 2006, text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." },
        { year: 2010, text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined" },
        { year: 2013, text: "Lorem Ipsum comes from sections 1.10.32" },
        { year: 2014, text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
        { year: 2016, text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary" },
        { year: 2020, text: "Lorem Ipsum comes from sections 1.10.32" },
        { year: 2021, text: "Making this the first true generator on the Internet" },
        { year: 2022, text: "Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour" },
        { year: 2023, text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" },
    ];
    const members = [
        { image: "/member1.png", name: "Henry Avery", title: "CHAIRMAN" },
        { image: "/member2.png", name: "Michael Edward", title: "VICE PRESIDENT" },
        { image: "/member3.png", name: "Eden Hazard", title: "CEO" },
        { image: "/member4.png", name: "Robert Downey Jr", title: "CEO" },
        { image: "/member5.png", name: "Nathan Drake", title: "STRATEGIST DIRECTOR" },
    ];

  return (
    <div>
        <div className="bg-white p-8 rounded-[10px]">
            <div className="bg-[url('/aboutbanner1.png')] bg-cover bg-center w-full rounded-[10px] py-20 px-30">
                <h1 className="text-[45px] font-bold pb-7 w-[23%]">Best experience <span className="font-normal">always wins</span></h1>
                <p className="text-[14px] text-[#666666] w-[20%]">#1 Online Marketplace for Electronic & Technology in Mahanttan, CA</p>
            </div>
            <div className="flex justify-around p-14">
                <h6 className="text-[18px] font-bold w-[17%]">OUR PURPOSE IS TO <span className="text-[#1ABA1A]">ENRICH AND ENHANCE LIVES</span> THROUGH TECHNOLOGY</h6>
                <div className="flex justify-between items-center">
                    <div className="w-[20%]">
                        <h2 className="text-[40px] font-bold">$12,5M</h2>
                        <p className="text-[12px] text-[#666666]">TOTAL REVENUE FROM 2001 - 2023</p>
                    </div>
                    <div className="w-[25%]">
                        <h2 className="text-[40px] font-bold">12K+</h2>
                        <p className="text-[12px] text-[#666666]">ORDER DELIVERED SUCCESSFUL ON EVERYDAY</p>
                    </div>
                    <div className="w-[22%]">
                        <h2 className="text-[40px] font-bold">725+</h2>
                        <p className="text-[12px] text-[#666666]">STORE AND OFFICE IN U.S AND WORLDWIDE</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className="w-full rounded-[10px] overflow-hidden hidden md:block"><Image src="/about2.png" alt="about" width={645} height={420} className="w-full h-full"/></div>
                <div className="bg-[#E2E4Eb] rounded-[10px] p-6 md:p-12 flex flex-col justify-center">
                    <div className="w-full rounded-[10px] overflow-hidden mb-4 block md:hidden"><Image src="/about2.png" alt="about" width={645} height={420} className="w-full h-full"/></div>
                    <h6 className="text-[18px] font-bold mb-4">We connect millions of buyers and sellers around the world, empowering people & creating economic opportunity for all.</h6>
                    <p className="text-[14px] text-[#666666] mb-6">Within our markets, millions of people around the world connect, both online and offline, to make, sell and buy unique goods. We also offer a wide range of Seller Services and tools that help creative entrepreneurs start, manage & scale their businesses.</p>
                    <Link href="/" className="text-white bg-[#1ABA1A] rounded-[10px] py-3 px-8 text-[14px] w-fit">SEND MESSAGE</Link>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-7 bg-white rounded-[10px]">
                <div className="flex justify-between mb-14">
                    <h6 className="text-[18px] font-bold w-[30%]">100% AUTHENTIC PRODUCTS</h6>
                    <span className="h-[60px] w-[60px] rounded-full bg-[#1ABA1A] flex justify-center items-center"><FontAwesomeIcon icon={faCheckCircle} className="h-[30px] w-[30px]"/></span>
                </div>
                <p className="text-[14px] text-[#666666]">Swoo Tech Mart just distribute 100% authorized products & guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum sapien varius.</p>
            </div>
            <div className="p-7 bg-white rounded-[10px]">
                <div className="flex justify-between mb-14">
                    <h6 className="text-[18px] font-bold w-[20%]">FAST DELIVERY</h6>
                    <span className="h-[60px] w-[60px] rounded-full bg-[#1ABA1A] flex justify-center items-center"><FontAwesomeIcon icon={faShippingFast} className="h-[30px] w-[30px]"/></span>
                </div>
                <p className="text-[14px] text-[#666666]">Fast shipping with a lots of option to delivery. 100% guarantee that your goods alway on time and perserve quality.</p>
            </div>
            <div className="p-7 bg-white rounded-[10px]">
                <div className="flex justify-between mb-14">
                    <h6 className="text-[18px] font-bold w-[30%]">AFFORDABLE PRICE</h6>
                    <span className="h-[60px] w-[60px] rounded-full bg-[#1ABA1A] flex justify-center items-center"><FontAwesomeIcon icon={faMoneyBillWave} className="h-[30px] w-[30px]"/></span>
                </div>
                <p className="text-[14px] text-[#666666]">We offer an affordable & competitive price with a lots of special promotions.</p>
            </div>
        </div>
        <div className="p-8 mt-4 rounded-[10px] bg-white">
            <div className="pb-8 border-b border-[#DEE2E6]">
                <h6 className="text-[18px] font-bold">OUR MISSION AND VISION</h6>
                <p className="text-[14px] my-8">Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. <span className="font-bold">Vivamus mollis mauris</span> vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p> 
                <div className="relative w-full h-[400px] rounded-[10px] overflow-hidden">
                    <Image src="/about3.png" alt="Banner" fill className="object-cover"/>
                </div>
            </div>
            <div className="pb-8 border-b border-[#DEE2E6]">
                <h6 className="text-[18px] font-bold py-8">FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES</h6>
                <p className="text-[18px]">Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 py-8">
                    <div>
                        {yearData.filter(item => item.year < 2014).map((item, index) => (
                            <div key={index} className="flex">
                                <span className="font-bold text-black mr-2">{item.year}:</span>
                                <span className="text-[#666666]">{item.text}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        {yearData.filter(item => item.year > 2013).map((item, index) => (
                            <div key={index} className="flex">
                                <span className="font-bold text-black mr-2">{item.year}:</span>
                                <span className="text-[#666666]">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between py-8">
                    <h6 className="font-bold text-[18px]">LEADERSHIPS</h6>
                    <Link href="/" className="text-[13px] text-[#666666]">View All 
                        <FontAwesomeIcon icon={faChevronRight} className="w-[13.2px] h-[13px]"/>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">                  
                    {members.map((member, i) => (
                        <Link href="/" key={i} className="flex flex-col items-center overflow-hidden shadow-sm">
                            <div className="w-full h-[500px] relative">
                                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-[10px]" />
                            </div>
                            <div className="p-4 text-center">
                                <h6 className="font-bold text-[16px]">{member.name}</h6>
                                <p className="text-[12px] text-[#666666]">{member.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}