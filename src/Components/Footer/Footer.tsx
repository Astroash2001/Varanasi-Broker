
import React from "react";
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <div className="bg-[#A4B792]">
                <div className="w-10/12 mx-auto ">
                    <div className="md:flex block  justify-between py-12 items-start">
                        <img src="/images/logo.svg" alt="" className="w-28 h-20 mb-4 " />

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-white md:w-8/12 w-full">
                            <div className="">
                                <p className="font-Montserratbold text-base">Shop</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Men</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Women</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Kids</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Jewelry</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Decor</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Skin</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Hair</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Gifting</p>
                            </div>
                            <div className="">
                                <p className="font-Montserratbold text-base">Rent</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Men</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Women</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Kids</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Jewelry</p>
                            </div>
                            <div className="">
                                <p className="font-Montserratbold text-base">About</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium"><Link href="/faq" className="cursor-pointer">FAQs</Link></p>
                                <p className="text-sm text-white py-1 font-Montserratmedium"><Link href="/privacy-policy" className="cursor-pointer">Privacy Policy</Link></p>
                                <p className="text-sm text-white py-1 font-Montserratmedium"><Link href="/about" className="cursor-pointer">About us</Link></p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Contact us</p>
                            </div>
                            <div className="">
                                <p className="font-Montserratbold text-base">Help</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium"><Link href="/terms-conditions" className="cursor-pointer">Terms & Conditions</Link></p>
                                <p className="text-sm text-white py-1 font-Montserratmedium"><Link href="/refund-return-policy" className="cursor-pointer">Refund & Return Policy</Link></p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Rental Policy</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Cancellation Policy</p>
                                <p className="text-sm text-white py-1 font-Montserratmedium">Customer care</p>
                            </div>
                            <div className="md:w-40 hidden md:block">
                                <div className="flex items-start gap-1 items-center">
                                    <p className="w-32 font-Montserratbold text-base">Register your business</p>
                                    <img src="/images/1.svg" alt="" className="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 my-4 md:hidden">
                            <div className="flex items-start gap-1 items-center">
                                <p className="w-32 font-Montserratbold text-base text-white">Register your business</p>
                                <img src="/images/1.svg" alt="" className="" />
                            </div>
                        </div>

                        <div className="flex gap-2 ml-8">
                            <img src="/images/5.svg" alt="" className="" />
                            <img src="/images/4.svg" alt="" className="" />
                            <img src="/images/3.svg" alt="" className="" />
                        </div>
                    </div>
                    <hr className="border border-white w-full -mt-8" />
                    <p className="text-center py-6 text-white text-sm font-thin font-Montserratsemibold"> © 2025 SixSigma All Rights Reserved</p>
                </div>
            </div>
        </>

    )
}

export default Footer;