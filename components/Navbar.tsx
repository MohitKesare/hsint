"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className=" w-full  h-[13vh] z-50 flex items-center  justify-between  px-8 py-4 bg-transparent border-b border-b-[#FFFFFF45]">
      {/* Logo */}
      <div className="text-2xl font-bold text-white    sm:w-fit">
        <Link href="/">
          <Image src="/logo.svg" alt="" />
        </Link>
      </div>

      {/* this button will not be visible on tablet and desktop devices,only compatible for mobile devices */}
      <Link href="/contact">
        <button className=" outfit-400-16 text-[16px] ml-1 sm:ml-4  px-1 sm:px-4 py-2  space-x-2 bg-[#996830] cursor-pointer text-white rounded-none hover:bg-[#000033] hover:text-white transition flex items-center justify-center sm:hidden">
          <p>CONTACT US</p>
          <GoArrowUpRight />
        </button>
      </Link>

      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="sm:hidden text-white"
      >
        {isMobileMenuOpen ? <HiX /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center space-x-6 ">
        <Link
          href="/"
          className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]"
        >
          About Us
        </Link>
        <Link
          href="/work"
          className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]"
        >
          Our Work
        </Link>
        <Link href="/contact">
          <button
            className=" outfit-400-16 text-[16px]ml-4 px-4 py-2  space-x-2 bg-[#996830] cursor-pointer text-white rounded-none hover:bg-[#000033] hover:text-white transition 
           items-center justify-center hidden sm:flex"
          >
            <p>CONTACT US</p>
            <GoArrowUpRight />
          </button>
        </Link>
      </div>
      {isMobileMenuOpen && (
        <div className="flex sm:hidden flex-col items-center justify-evenly space-y-6 absolute top-[13vh] right-0 bg-[#2c2c2c] w-[30vw] ">
          <Link
            href="/"
            className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/work"
            className="text-white hover:text-blue-300 transition outfit-400-16 text-[16px]mb-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Work
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
