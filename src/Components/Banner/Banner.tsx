"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 📌 Banner Content Component (Fixed Content)
function BannerContent() {
  return (
    <div className="block text-center md:-mt-10 mt-20 py-2 lg:px-20 px-2 md:w-10/12 w-11/12 relative z-10">
      {/* Optimized Image */}
      <h1 className="text-white md:text-4xl text-xl md:leading-[3rem] font-BonaNovaRegular">
        Welcome to Varanasi
      </h1>
      <p className="md:py-4 py-2 md:text-2xl text-lg text-white font-BonaNovaRegular md:px-8 px-2">
        Let&apos;s Together Explore The Ancient City.
      </p>

      {/* Dropdown Menu */}
      {/* <div className="relative inline-block text-left md:w-[40%] w-full" ref={dropdownRef}>
                <button
                    onClick={toggleDropdown}
                    className="w-full relative text-white bg-[#2B2B2B00] border border-white focus:outline-none font-medium rounded-sm text-lg leading-6 px-5 md:py-3 py-2 text-center flex justify-between items-center"
                    type="button"
                >
                    Choose type
                    <svg className="w-3 h-3 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div className={`absolute z-10 mt-2 w-full rounded-lg shadow-md bg-white transition-opacity duration-300 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <ul className="py-2 text-sm text-gray-800">
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Venue</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Decor</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Grooming</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Beauty & Wellness</a></li>
                    </ul>
                </div>
            </div> */}
    </div>
  );
}

// 📌 Banner Slider Component (Only Background Changes)
function BannerSlider() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isDropdownTwoOpen, setIsDropdownTwoOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Slick Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: false,
  };

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsDropdownTwoOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 📌 Background Image Paths (Stored in `public/`)
  const bgImages: string[] = [
    "/images/main-banner.jpg",
    "/images/download.jpg",
    "/images/main-banner.jpg",
    "/images/download.jpg",
    "/images/main-banner.jpg",
  ];

  return (
    <div className="w-full relative">
      <Slider {...settings} className="banner-slider">
        {bgImages.map((image, index) => (
          <div key={index} className="w-full h-screen relative">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url(${image})`, height: "100vh" }}
            ></div>
            <div className="relative z-10 flex items-center justify-center h-screen">
              <BannerContent />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlider;
