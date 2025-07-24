// import AboutUs from "@/components/AboutPage/AboutUs";
// import Process from "@/components/AboutPage/Process";
// import Values from "@/components/AboutPage/Values";
// import Footer from "@/components/Footer";
// import Legacy from "@/components/Legacy";
// import Navbar from "@/components/Navbar";
// import Something from "@/components/ServicePage/Something";
// import Image from "next/image";
// import React from "react";

// const page = () => {
//   return (
//     <div className="relative w-full flex flex-col">
//       {/* Background Image */}
//       <Image
//         src="services-home.png"
//         alt=""
//         className="absolute top-0 left-0 w-full h-[60vh] object-cover z-0 "
//       />
//       {/* Optional dark overlay for readability */}
//       <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/50 z-0" />

//       {/* Foreground Content */}
//       <div className="relative z-10 mb-15">
//         {/* Transparent Navbar */}
//         <div className="absolute top-0 left-0 w-full">
//           <Navbar />
//         </div>

//         {/* Page Content */}
//         <div className="pt-24 px-8 text-white max-w-5xl mx-auto flex items-center justify-center flex-col">
//           <h1 className="fira-code-600 text-[71px]mt-10">
//             About HS Marble Edge
//           </h1>
//           <p className="outfit-24 text-[30px]mt-4 text-center">
//             Crafting Interiors and Stonework Excellence since 1922
//           </p>
//         </div>
//       </div>
//       <AboutUs />
//       <Legacy />
//       <Process />
//       <Values />
//       <Something />
//       <Footer />
//     </div>
//   );
// };

// export default page;

import AboutUs from "@/components/AboutPage/AboutUs";
import Process from "@/components/AboutPage/Process";
import Values from "@/components/AboutPage/Values";
import Footer from "@/components/Footer";
import Legacy from "@/components/Legacy";
import Navbar from "@/components/Navbar";
import Something from "@/components/ServicePage/Something";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh]">
        {/* Background Image */}
        <Image
          src="services-home.png"
          alt="services-bg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        {/* Foreground Header Text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-8">
          <h1 className="fira-code-600 text-4xl sm:text-5xl lg:text-[71px] leading-tight">
            About HS Marble Edge
          </h1>
          <p className="outfit-24 text-lg sm:text-xl lg:text-[30px] mt-4">
            Crafting Interiors and Stonework Excellence since 1922
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <AboutUs />
      <Legacy />
      <Process />
      <Values />
      <Something />
      <Footer />
    </div>
  );
};

export default page;
