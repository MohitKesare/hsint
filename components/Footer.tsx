import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full h-fit bg-[#2C2C2C]  flex flex-col items-center justify-center">
      <div className="h-[20vh] sm:h-[40vh]  w-[90%] flex items-center justify-center ">
        <div className="flex">
          <img src="logo.svg" alt="" className="mr-3" />
          <h2 className="fira-code-600 text-[28px] sm:text-[44px] md:text-[71px] text-[#C4A386] ml-2">
            HS Interior Company
          </h2>
        </div>
      </div>
      <div className="w-[90%] flex flex-col sm:flex-row sm:justify-between ">
        <div className="flex flex-col w-fit sm:my-8 space-y-6 sm:space-y-4">
          <div>
            <p className="outfit-400-16">Address:</p>
            <p className="outfit-400-16 text-[16px] text-[#C4A386]">
              Infont od Dmart, Hinjewadi, Pune
            </p>
          </div>
          <div>
            <p className="outfit-400-16">Contact:</p>
            <p className="outfit-400-16 text-[16px] text-[#C4A386]">
              9767457282
            </p>
            <p className="outfit-400-16 text-[16px]text-[#C4A386]">
              hsinterior@gmail.com
            </p>
          </div>
          <div className="flex space-x-3">
            <FaFacebook />
            <FaInstagram />
            <RiTwitterXLine />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>

        <div className="flex flex-col w-fit mr-8 text-left space-y-2 mt-4">
          <p className="outfit-400-16 text-[16px]">Pages</p>
          <p className="outfit-400-16 text-[16px]text-[#C4A386]">Home</p>
          <p className="outfit-400-16 text-[16px]text-[#C4A386]">Services</p>
          <p className="outfit-400-16 text-[16px]text-[#C4A386]">About Us</p>
          <p className="outfit-400-16 text-[16px]text-[#C4A386]">Our Work</p>
          <p className="outfit-400-16 text-[16px]text-[#C4A386]">Contact</p>
        </div>
      </div>
      <div className="h-[1px] w-[90%] bg-[#C4A386] mt-3 mb-3"></div>
      <div className="flex sm:flex-row flex-col justify-between w-[90%] mb-10">
        <p className="outfit-400-16">
          © 2025 HS Interior. All rights reserved.{" "}
        </p>
        <div className="flex space-x-4">
          <p className="outfit-400-16">Privacy Policy</p>
          <p className="outfit-400-16">Terms & services</p>
          <p className="outfit-400-16">Cookies Setting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
