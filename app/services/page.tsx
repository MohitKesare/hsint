import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InteriorDesign from "@/components/ServicePage/InteriorDesign";
import MarbleInstallations from "@/components/ServicePage/MarbleInstallations";
import Something from "@/components/ServicePage/Something";
import TileInstallations from "@/components/ServicePage/TileInstallations";
import Services from "@/components/Services";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative w-full flex flex-col border-red-500 border-2 ">
      {/* Background Image */}
      <img
        src="services-home.png"
        alt=""
        className="absolute top-0 left-0 w-full h-[60vh] object-cover z-0 "
      />
      {/* Optional dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 mb-15">
        {/* Transparent Navbar */}
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="pt-24 px-8 text-white max-w-5xl mx-auto flex items-center justify-center flex-col">
          <h1 className="fira-code-600 text-[34px] text-center sm:text-[44px] md:text-[54px] lg:text-[71px] mt-10">
            Discover Our Expert Services
          </h1>
          <p className="outfit-24 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] mt-4 text-center">
            From elegant interiors to expert stonework, we offer tailored
            services backed by 100+ years of craftsmanship — designed to elevate
            every space with beauty and precision.
          </p>
        </div>
      </div>
      <div className="h-[10vh]"></div>
      <Services />
      <InteriorDesign />

      <MarbleInstallations />
      <TileInstallations />
      <Clients />
      <Something />
      <Footer />
    </div>
  );
};

export default page;
