import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Checkout() {
    return (
        <div className="bg-white p-12 rounded-[10px]">
            <h6 className="text-[18px] font-bold">CHECKOUT</h6>
            <div className="flex gap-6 mt-6">
                <div className="w-[70%]">
                    <div className="bg-[#E9E7E8] rounded-[10px] p-5 flex items-center gap-4">
                        <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
                        <p> Returning customer? <Link href="/" className="underline text-red-500">Click here to log in</Link></p>
                    </div>
                    <div className="mt-14">
                        <h6 className="text-[16px] font-bold">Billing Details</h6>
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
                            <label htmlFor="text" className="text-[14px]">Company Name <span className="text-[#666666]">(Optional)</span></label>
                            <input type="text" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label className="text-[14px]">Country / Region <span className="text-red-500">*</span></label>
                            <select className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC]">
                                <option value="US">United States (US)</option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Street Address</label>
                            <input type="text" placeholder="House number and street name..." className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                            <input type="text" placeholder="Apartment, suit, unit, etc (Optional)" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Town / City <span className="text-red-500">*</span></label>
                            <input type="text" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label className="text-[14px]">State / County <span className="text-red-500">*</span></label>
                            <select className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC]">
                                <option value="DC">Washington</option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Zip Code <span className="text-[#666666]">(Optional)</span></label>
                            <input type="text" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Phone Number <span className="text-[#666666]">(Optional)</span></label>
                            <input type="text" placeholder="(+xx) xxx..." className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="email" className="text-[14px]">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" placeholder="Example@gmail.com" className="mt-2 p-2 w-full rounded-[6px] border border-[#CCCCCC] focus:outline-none"/>
                        </div>

                        <div className="flex items-center gap-2 mt-6 mb-12">
                            <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer"/>
                            <label htmlFor="agree" className="text-[14px]">Create an account</label>
                        </div>

                        <h6 className="text-[16px] font-bold">Additional Information</h6>
                        <div className="flex flex-col mt-6">
                            <label htmlFor="text" className="text-[14px]">Order Notes <span className="text-[#666666]">(Optional)</span></label>
                            <textarea className="w-full h-32 p-2 border border-[#CCCCCC] rounded-[6px] focus:outline-none" placeholder="Note about your order, e.g. special note for delivery "></textarea>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] flex flex-col justify-between">
                    <div className="bg-[#E9E7E8] rounded-[10px] p-5 flex items-center gap-4">
                        <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
                        <p> Have a coupon? <Link href="/" className="underline text-red-500">Click here to enter your code</Link></p>
                    </div>
                    <div>
                        <h6 className="text-[16px] font-bold">Your Order</h6>
                        <div className="bg-[#EDEFF5] p-5 rounded-[10px] mt-6">
                            <div className="py-2 border-b border-[#CCCCCC] flex justify-between text-[12px] text-[#666666]">
                                <p>PRODUCT</p>
                                <p>SUB TOTAL</p>
                            </div>
                            <div className="py-2 border-b border-[#CCCCCC] text-[14px]">
                                <div className="flex gap-4 py-4">
                                    <Image src="/laptopslider1.png" alt="Laptop" width={60} height={60} />
                                    <div className="text-[14px]">
                                        <p className="font-semibold">Pinnaeple Macbook Pro 2022 M1/ 512GB</p>
                                        <p className="text-[#666666]">x 3</p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p>Worldwide Standard Shipping Free</p>
                                    <p className="text-red-500">+ $9.50</p>
                                </div>
                            </div>
                            <div className="py-2 flex justify-between text-[16px] font-bold">
                                <p>ORDER TOTAL</p>
                                <p className="text-[#1ABA1A]">$1,746.00</p>
                            </div>
                        </div>
                        <div className="bg-[#E1E3EB] p-4 rounded-[10px] space-y-2">
                            <div className="flex items-start gap-2">
                                <div>
                                    <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="agree" className="text-[14px] font-bold">Direct Bank Transfer</label>
                                    <label htmlFor="agree" className="text-[13px] text-[#666666]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</label>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer"/>
                                <label htmlFor="agree" className="text-[14px] font-bold">Cash on Delivery</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A] cursor-pointer"/>
                                <div className="flex justify-between items-center w-full">
                                    <label htmlFor="agree" className="text-[14px] font-bold"><span className="font-bold">Paypal </span><Link href="https://about.pypl.com/about-us/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-regular">What&#39;s Paypal?</Link></label>
                                    <label htmlFor="agree" className="text-[14px]"><Image src="/paypal.png" alt="paypal" width={60} height={15}/></label>
                                </div>
                            </div>
                            <Link href="/" className="text-white bg-[#1ABA1A] rounded-[10px] py-3 px-10 text-[14px] mt-10 flex justify-center">PLACE ORDER</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}