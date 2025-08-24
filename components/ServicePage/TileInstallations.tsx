// import React from "react";
// import Image from "next/image";

// const TileInstallations = () => {
//   return (
//     <div className="h-[100vh] w-full  bg-white flex justify-center items-center  ">
//       <div
//         className="h-[90%] w-[90%] flex justify-evenly mt-20
//       "
//       >
//         <div className="flex flex-col items-start h-full w-[50%]">
//           <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-4">
//             3. Tile Installations
//             <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
//           </div>
//           <div className="ml-5">
//             <h2 className="fira-code text-[71px]text-[#2C2C2C]">
//               Functional. Durable.{" "}
//               <span
//                 className="
//           fira-code-italic text-[71px] text-black"
//               >
//                 Beautifully Aligned.
//               </span>
//             </h2>
//           </div>
//           <div className="ml-5">
//             <p className="outfit text-[20px]text-[#444444] mt-4 w-[90%]">
//               Whether it&apos;s aesthetic tiling or heavy-duty floors, our team
//               ensures clean cuts, level finishes, and flawless joints — every
//               time.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col w-[50%] h-[90%] items-center">
//           <div className="flex justify-evenly w-[90%] h-[50%] space-x-5   items-center rounded">
//             <div
//               className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer

//             "
//             >
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px]w-[80%]">
//                   Spatial Planning & Layout Design
//                 </h4>
//                 <p className="outfit-400-16 text-[16px]w-[90%]">
//                   We analyze your space to create optimal layouts that align
//                   with your lifestyle or brand needs — ensuring efficient flow,
//                   functionality, and aesthetics.
//                 </p>
//               </div>
//               <img
//                 src={`interior-1.jpg`}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
//               />
//             </div>
//             <div className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out  border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer">
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px]w-[80%]">
//                   Furniture & Décor Curation
//                 </h4>
//                 <p className="outfit-400-16 text-[16px]w-[90%]">
//                   From modular furniture to custom pieces, we curate or design
//                   furnishings that complete your space — with attention to
//                   scale, texture, and comfort.
//                 </p>
//               </div>
//               <img
//                 src={`interior-2.jpg`}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
//               />
//             </div>
//           </div>
//           <div className="flex justify-evenly w-[90%]  space-x-5  h-[50%]  items-center">
//             <div
//               className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer
//             "
//             >
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px]w-[80%]">
//                   Material & Color Consultation
//                 </h4>
//                 <p className="outfit-400-16 text-[16px]w-[90%]">
//                   From marble finishes to wall paints, we help you choose
//                   materials and color palettes that reflect your vision and
//                   endure through trends.
//                 </p>
//               </div>
//               <img
//                 src={`interior-3.jpg`}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover hidden group-hover:block"
//               />
//             </div>
//             <div className="relative rounded-md overflow-hidden w-[48%] h-[97%] group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[#eddac5] hover:border-[10px] hover:scale-105 cursor-pointer">
//               <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:hidden space-y-3">
//                 <h4 className="fira-code-20 text-[20px]w-[80%]">
//                   Lighting & Ambience Design
//                 </h4>
//                 <p className="outfit-400-16 text-[16px]w-[90%]">
//                   We design layered lighting systems — ambient, task, and accent
//                   — to shape mood, improve usability, and highlight key
//                   architectural elements.
//                 </p>
//               </div>
//               <img
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

// export default TileInstallations;

import React from "react";
import Image from "next/image";

const TileInstallations = () => {
  const cards = [
    {
      title: "Spatial Planning & Layout Design",
      text: "We analyze your space to create optimal layouts that align with your lifestyle or brand needs — ensuring efficient flow, functionality, and aesthetics.",
      image: "interior-2.jpg",
    },
    {
      title: "Furniture & Décor Curation",
      text: "From modular furniture to custom pieces, we curate or design furnishings that complete your space — with attention to scale, texture, and comfort.",
      image: "interior-4.jpg",
    },
    {
      title: "Material & Color Consultation",
      text: "From marble finishes to wall paints, we help you choose materials and color palettes that reflect your vision and endure through trends.",
      image: "interior-6.jpg",
    },
    {
      title: "Lighting & Ambience Design",
      text: "We design layered lighting systems — ambient, task, and accent — to shape mood, improve usability, and highlight key architectural elements.",
      image: "interior-8.jpg",
    },
  ];

  return (
    <div className="w-full bg-white flex justify-center items-center py-16 px-4">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="outfit-400-14 text-[#996830]">
            3. Tile Installations
            <div className="w-32 h-[1.2px] bg-[#996830] mt-2"></div>
          </div>
          <h2 className="fira-code text-[32px] sm:text-[48px] lg:text-[64px] text-[#2C2C2C] leading-tight">
            Functional. Durable.{" "}
            <span className="fira-code-italic text-black">
              Beautifully Aligned.
            </span>
          </h2>
          <p className="outfit text-[16px] sm:text-[20px] text-[#444444] max-w-prose">
            Whether it&apos;s aesthetic tiling or heavy-duty floors, our team
            ensures clean cuts, level finishes, and flawless joints — every
            time.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-md overflow-hidden group bg-[#f0f0f0] text-black flex items-center justify-center text-center text-sm font-semibold transition-all duration-300 ease-in-out border-[#E6D8CC] border-2 hover:border-[10px] hover:border-[#eddac5] hover:scale-105 cursor-pointer min-h-[260px]"
            >
              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-3 space-y-3 group-hover:hidden">
                <h4 className="fira-code text-[20px] w-full">{card.title}</h4>
                <p className="outfit text-[16px]">{card.text}</p>
              </div>
              {/* Hover Image */}
              <img
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

export default TileInstallations;
