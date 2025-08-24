import ContactUs from "@/components/ContactPage/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative w-full flex flex-col">
      {/* Background Image */}
      <img
        src="work-hero.png"
        alt=""
        className="absolute top-0 left-0 w-full h-[60vh] object-cover z-0 "
      />
      {/* Optional dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 ">
        {/* Transparent Navbar */}
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="pt-24 px-8 text-white max-w-5xl mx-auto flex items-center justify-center flex-col">
          <h1 className="fira-code-600 text-[71px] mt-10 text-center">
            Let&apos;s Connect & Create Something Exceptional
          </h1>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
