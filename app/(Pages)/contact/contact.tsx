import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div>
            <div className="rounded-[10px] bg-white">
                <h6 className="font-bold text-[18px] pl-8 pt-8 pb-4">READY TO WORK WITH US</h6>
                <div className="flex p-8 gap-8">
                    <div className="w-[60%]">
                        <p className="text-[#666666]">Contact us for all your questions and opinions</p>
                        <div className="flex gap-4 mt-8">
                            <div className="flex flex-col flex-1">
                                <label htmlFor="text" className="text-[14px]">First Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Jhon" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                            </div>
                            <div className="flex flex-col flex-1">
                                <label htmlFor="text" className="text-[14px]">Last Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Doe" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="email" className="text-[14px]">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" placeholder="Example@gmail.com" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Phone Number <span className="text-[#666666]">(Optional)</span></label>
                            <input type="text" placeholder="(+xx) xxx..." className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label className="text-[14px]">Country / Region <span className="text-red-500">*</span></label>
                            <select className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] text-[#999999]">
                                <option value="US">United States (US)</option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Subject <span className="text-[#666666]">(Optional)</span></label>
                            <input type="text" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Message</label>
                            <textarea className="w-full h-32 p-2 border border-[#CCCCCC] rounded-[6px] focus:outline-none" placeholder="Note about your order, e.g. special note for delivery "></textarea>
                        </div>

                        <div className="flex items-center gap-2 mt-4 mb-14">
                            <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer"/>
                            <label htmlFor="agree" className="text-[14px]">I want to receive news and updates once in a while. By submitting, I&#39;m agreed to the <Link href="/" className="text-[#1ABA1A] underline">Terms & Conditons</Link></label>
                        </div>
                        <Link href="/" className="text-white bg-[#1ABA1A] rounded-[10px] py-4 px-10 text-[14px] w-[125px]">SEND MESSAGE</Link>
                    </div>

                    <div className="w-[40%] space-y-4">
                        <div className="bg-[#EDEFF6] p-8">
                            <p className="text-[12px] text-[#666666]">UNITED STATES (HEADQUATER)</p>
                            <p className="text-[16px] w-[50%] pt-6">152 Thatcher Road St, Mahattan, 10463, US (+025) 3886 25 16</p>
                            <Link href="/" className="text-[16px] underline text-[#1ABA1A] pt-1">hello@swattechmart.com</Link>

                            <p className="text-[12px] text-[#666666] pt-12">UNITED KINGDOM (BRANCH)</p>
                            <p className="text-[16px] w-[55%] pt-6">12 Buckingham Rd, Thornthwaite, HG3 4TY, UK (+718) 895-5350</p>
                            <Link href="/" className="text-[16px] underline text-[#1ABA1A] pt-1">contact@swattechmart.co.uk</Link>

                            <div className="flex flex-row mt-[40px] gap-4">
                                <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center bg-white rounded-full">
                                    <FontAwesomeIcon icon={faTwitter} className="w-[18.2px] h-[18px]"/>
                                </Link>
                                <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center bg-white rounded-full">
                                    <FontAwesomeIcon icon={faFacebookF} className="w-[18.2px] h-[18px]"/>
                                </Link>
                                <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center bg-white rounded-full">
                                    <FontAwesomeIcon icon={faInstagram} className="w-[18.2px] h-[18px]"/>
                                </Link>
                                <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center bg-white rounded-full">
                                    <FontAwesomeIcon icon={faYoutube} className="w-[18.2px] h-[18px]"/>
                                </Link>
                                <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center bg-white rounded-full">
                                    <FontAwesomeIcon icon={faPinterestP} className="w-[18.2px] h-[18px]"/>
                                </Link>
                            </div>
                        </div>
                        <Image src="/contact.png" alt="Contact" width={525} height={380} className="rounded-[10px] w-full h-[380px]" />
                    </div>
                </div>
            </div>

            <div className="mt-4 rounded-[10px] bg-white">
                <h6 className="font-bold text-[18px] pl-8 pt-8">FIND US ON GOOGLE MAP</h6>
                <div className="w-full p-8 h-[400px]">
                    <iframe src="https://maps.google.com/maps?q=152+Thatcher+Road,Manhattan,New+York,10463,US&z=15&output=embed"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
}