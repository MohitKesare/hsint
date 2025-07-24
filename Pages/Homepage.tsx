import About from "@/components/About";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Navbar from "@/components/Navbar";
import RecentWork from "@/components/Recent";
import Services from "@/components/Services";
import Timeless from "@/components/Timeless";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0 "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/homeV.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col">
        <Navbar />

        <Hero />
        <Legacy />
        <About />
        <Services />
        <RecentWork />
        <Clients />
        <Timeless />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
