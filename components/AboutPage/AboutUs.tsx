// import React from "react";
// import Image from "next/image";

// const AboutUs = () => {
//   return (
//     <div className="h-screen w-screen bg-white flex items-center justify-center">
//       <div className="h-[75%] w-[90%] flex">
//         <div className="flex flex-col w-[50%] h-full  space-y-4">
//           <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-10">
//             Our Legacy
//             <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
//           </div>

//           <div className="fira-code-600 text-[71px]leading-[80px] text-black ml-5">
//             Timeless Interiors, Trusted{" "}
//             <span className="fira-code-italic">Craftmanship</span>
//           </div>
//           <p className="text-[#444444] ml-5 pr-5">
//             HS Marble Edge is a legacy built over a century of dedication to
//             interior craftsmanship. Since 1922, we&apos;ve been creating spaces
//             that blend beauty with precision — offering expert services in
//             interior design, tile work, marble and granite fittings. With a
//             commitment to quality and timeless aesthetics, we&apos;ve earned the
//             trust of homeowners, architects, and builders alike.
//           </p>
//           <div className=" ml-5 w-42 h-15 mt-6 border-1 border-[#2C2C2C] rounded-md hover:bg-[#C5A387] transition-all duration-300 hover:-translate-y-1">
//             <div className="w-full h-full border-1 border-[#2C2C2C] rounded-md relative -top-1 right-1 text-center text-[#444444] hover:text-white flex items-center justify-center hover:bg-[#444444] transition-all duration-300 ">
//               {" "}
//               Our Story
//             </div>
//           </div>
//         </div>
//         <div className="flex h-full w-[50%] items-center justify-center">
//           <div className="w-full h-[80%]  space-x-2 flex">
//             <Image
//               src="/about-2.png"
//               alt="About Us"
//               className="w-full h-full object-cover relative top-10"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col   justify-center space-y-4">
          {/* Heading */}
          <div className="outfit-400-14 text-[#996830] w-fit ml-1 lg:ml-5 mt-4 text-sm sm:text-base">
            Our Legacy
            <div className="w-[85%] h-[1.2px] bg-[#996830] mt-1"></div>
          </div>

          {/* Title */}
          <h2 className="fira-code-600 text-3xl sm:text-4xl md:text-5xl lg:text-[71px] leading-tight text-black ml-1 lg:ml-5">
            Timeless Interiors, Trusted{" "}
            <span className="fira-code-italic">Craftmanship</span>
          </h2>

          {/* Description */}
          <p className="text-[#444444] text-sm sm:text-base ml-1 lg:ml-5 pr-1 lg:pr-5">
            HS Marble Edge is a legacy built over a century of dedication to
            interior craftsmanship. Since 1922, we&apos;ve been creating spaces
            that blend beauty with precision — offering expert services in
            interior design, tile work, marble and granite fittings. With a
            commitment to quality and timeless aesthetics, we&apos;ve earned the
            trust of homeowners, architects, and builders alike.
          </p>

          {/* Button */}
          <div className="ml-1 lg:ml-5 w-fit mt-6">
            <button className="px-6 py-3 border border-[#2C2C2C] rounded-md text-[#444444] hover:text-white hover:bg-[#444444] transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full h-full">
            <Image
              src="/about-2.png"
              alt="About Us"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
