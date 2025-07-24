import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RecentWork from "@/components/Recent";
import Timeless from "@/components/Timeless";
import MarbleGranite from "@/components/WorkPage/MarbleGranite";
import Recents from "@/components/WorkPage/Recents";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative w-full flex flex-col">
      {/* Background Image */}
      <Image
        src="work-hero.png"
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
          <h1 className="fira-code-600 text-[71px]mt-10">
            Our Work Speaks All
          </h1>
          <p className="outfit-24 text-[30px]mt-4 text-center">
            Integrity matters. We are committed to delivering quality.
          </p>
        </div>
      </div>
      <RecentWork />

      <Recents />
      <MarbleGranite />
      <Clients />
      <Timeless />
      <Footer />
    </div>
  );
};

export default page;
