// import React from "react";
// import Image from "next/image";

// const InteriorDesign = () => {
//   return (
//     <div className="w-screen h-[120vh] md:h-[80vh] xl:h-[100vh]   bg-white flex justify-center items-center ">
//       <div
//         className="h-[90%] lg:w-[95%] xl:w-[90%] flex flex-col md:flex-row justify-evenly mt-20 bg-yellow-500 items-center
//       "
//       >
//         <div className="flex flex-col justify-evenly items-start h-full w-[90%] md:w-[40%] lg:w-[50%] border-2 border-red-500">
//           <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-2 md:mt-4">
//             1. INTERIOR DESIGN
//             <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
//           </div>
//           <div className="ml-5 leading-18 text-[44px] lg:text-[64px] xl:text-[71px] w-full">
//             <h2 className="fira-code md:text-[44px] lg:text-[64px] xl:text-[71px] text-[#2C2C2C]">
//               Transforming Spaces into{" "}
//               <span
//                 className="
//           fira-code-italic  text-black"
//               >
//                 Timeless Stories
//               </span>
//             </h2>
//           </div>
//           <div className="ml-5">
//             <p className="outfit text-[16px] lg:text-[20px] text-[#444444] mt-4 w-[90%]">
//               Our in-house design team collaborates closely with clients to
//               craft interiors that balance function and emotion. From initial
//               moodboards to final fittings — we guide every step. Our in-house
//               design team collaborates closely with clients to craft interiors
//               that balance function and emotion. From initial moodboards to
//               final fittings — we guide every step.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col w-[90%] md:w-[60%] lg:w-[50%] h-[100%] items-center border-2 border-blue-500 space-x-5">
//           <div className="flex md:flex-row flex-col justify-evenly w-[90%] h-[50%] space-x-5   items-center rounded">
//             <div
//               className="relative rounded-md w-[90%]  md:w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer

//             "
//             >
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px] w-[80%]">
//                   Spatial Planning & Layout Design
//                 </h4>
//                 <p className="outfit-400-16 text-[16px] w-[90%]">
//                   We analyze your space to create optimal layouts that align
//                   with your lifestyle or brand needs — ensuring efficient flow,
//                   functionality, and aesthetics.
//                 </p>
//               </div>
//               <Image
//                 src={`interior-1.jpg`}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
//               />
//             </div>
//             <div className="relative rounded-md overflow-hidden w-[90%] md:w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out  border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer">
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px] w-[80%]">
//                   Furniture & Décor Curation
//                 </h4>
//                 <p className="outfit-400-16 text-[16px] w-[90%]">
//                   From modular furniture to custom pieces, we curate or design
//                   furnishings that complete your space — with attention to
//                   scale, texture, and comfort.
//                 </p>
//               </div>
//               <Image
//                 src={`interior-2.jpg`}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
//               />
//             </div>
//           </div>
//           <div className="flex md:flex-row flex-col justify-evenly w-[90%]  space-x-5  h-[50%]  items-center">
//             <div
//               className="relative rounded-md overflow-hidden w-[90%] md:w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer
//             "
//             >
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px] w-[80%]">
//                   Material & Color Consultation
//                 </h4>
//                 <p className="outfit-400-16 text-[16px] w-[90%]">
//                   From marble finishes to wall paints, we help you choose
//                   materials and color palettes that reflect your vision and
//                   endure through trends.
//                 </p>
//               </div>
//               <Image
//                 src={`interior-3.jpg`}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
//               />
//             </div>
//             <div className="relative rounded-md overflow-hidden w-[90%] md:w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out bozrder-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer">
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px] w-[80%]">
//                   Lighting & Ambience Design
//                 </h4>
//                 <p className="outfit-400-16 text-[16px] w-[90%]">
//                   We design layered lighting systems — ambient, task, and accent
//                   — to shape mood, improve usability, and highlight key
//                   architectural elements.
//                 </p>
//               </div>
//               <Image
//                 src={`interior-4.jpg`}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteriorDesign;

import React from "react";
import Image from "next/image";

const InteriorDesign = () => {
  return (
    <div className="w-screen min-h-screen bg-white flex justify-center items-center px-4 md:px-8 py-16">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex flex-col justify-evenly items-start w-full md:w-[48%] space-y-6">
          <div className="outfit-400-14 text-[#996830]">
            1. INTERIOR DESIGN
            <div className="w-16 h-[1.2px] bg-[#996830] mt-2"></div>
          </div>
          <h2 className="fira-code text-[32px] sm:text-[44px] lg:text-[64px] xl:text-[71px] text-[#2C2C2C] leading-tight">
            Transforming Spaces into{" "}
            <span className="fira-code-italic text-black">
              Timeless Stories
            </span>
          </h2>
          <p className="outfit text-[16px] lg:text-[20px] text-[#444444] max-w-prose">
            Our in-house design team collaborates closely with clients to craft
            interiors that balance function and emotion. From initial moodboards
            to final fittings — we guide every step.
          </p>
        </div>

        {/* Right Cards */}
        <div className="w-full md:w-[48%] grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Spatial Planning & Layout Design",
              text: "We analyze your space to create optimal layouts that align with your lifestyle or brand needs — ensuring efficient flow, functionality, and aesthetics.",
              image: "interior-1.jpg",
            },
            {
              title: "Furniture & Décor Curation",
              text: "From modular furniture to custom pieces, we curate or design furnishings that complete your space — with attention to scale, texture, and comfort.",
              image: "interior-2.jpg",
            },
            {
              title: "Material & Color Consultation",
              text: "From marble finishes to wall paints, we help you choose materials and color palettes that reflect your vision and endure through trends.",
              image: "interior-3.jpg",
            },
            {
              title: "Lighting & Ambience Design",
              text: "We design layered lighting systems — ambient, task, and accent — to shape mood, improve usability, and highlight key architectural elements.",
              image: "interior-4.jpg",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative group bg-[#f0f0f0] border-2 border-[#E6D8CC] hover:border-[10px] hover:border-[#eddac5] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer rounded-md overflow-hidden flex items-center justify-center text-center p-4 min-h-[280px]"
            >
              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden px-3 space-y-3 text-black">
                <h4 className="fira-code-20 text-[20px]">{card.title}</h4>
                <p className="outfit-400-16 text-[14px] sm:text-[16px]">
                  {card.text}
                </p>
              </div>
              {/* Image on hover */}
              <Image
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
