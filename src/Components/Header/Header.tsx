"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent text-white absolute top-0 w-full z-10 px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <img src="images/removebg-logo.png" alt="Logo" className="mx-auto h-16" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex space-x-12 fixed md:static bg-white md:bg-transparent w-full md:w-auto top-16 right-0 md:flex-row md:items-center md:space-x-12 p-4 md:p-0 shadow-md md:shadow-none transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <li>
              <Link href="/" className="text-black hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/services" className="text-black hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link href="/blog" className="text-black hover:text-gray-300">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-gray-300">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;