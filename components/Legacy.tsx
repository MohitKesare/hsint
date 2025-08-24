// import React from "react";
// import Image from "next/image";

// const Legacy = () => {
//   return (
//     <div className="h-[100vh] md:h-100 lg:h-60 w-full bg-[#2C2C2C] flex items-center justify-center flex-col space-y-5">
//       <div className="w-[70%] flex flex-col  h-fit ">
//         <div className="fira-code-legacy text-[24px] text-[#969797]  w-fit mx-10">
//           Our Legacy in numbers
//           <div className="w-[30%] h-[1.2px] bg-[#969797] mt-2"></div>
//         </div>
//       </div>
//       <div className="w-[70%]lg:w-[90%] flex  flex-col md:grid md:grid-cols-2 gap-4 lg:flex lg:flex-row  justify-evenly h-[80%]  items-start">
//         <div className="flex items-center justify-center   space-x-2">
//           <img src="/legacy-number-1.png" alt="" />
//           <div className="flex flex-col items-start justify-center space-x-2">
//             <h3 className="outfit">500+</h3>
//             <p className="outfit-400-16">Projects completed</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-center   space-x-2">
//           <img src="/legacy-number-2.png" alt="" />
//           <div className="flex flex-col items-start justify-center space-x-2">
//             <h3 className="outfit">100+</h3>
//             <p className="outfit-400-16">Tile & stone Options</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-center   space-x-2">
//           <img src="/legacy-number-3.png" alt="" />
//           <div className="flex flex-col items-start justify-center space-x-2">
//             <h3 className="outfit">200+</h3>
//             <p className="outfit-400-16">Happy Clients</p>
//           </div>
//         </div>
//         <div className="flex items-center justify-center   space-x-2">
//           <img src="/legacy-number-4.png" alt="" />
//           <div className="flex flex-col items-start justify-center space-x-2">
//             <h3 className="outfit">1992</h3>
//             <p className="outfit-400-16">Established In</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Legacy;

import React from "react";

const Legacy = () => {
  return (
    <div className="w-full bg-[#2C2C2C] flex items-center justify-center flex-col py-16 px-4">
      {/* Header */}
      <div className="w-full max-w-6xl mb-10">
        <div className="fira-code-legacy text-[20px] sm:text-[24px]  text-[#969797] w-fit mx-auto sm:mx-10">
          Our Legacy in Numbers
          <div className="w-[50%] sm:w-[30%] h-[1.2px] bg-[#969797] mt-2"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Item 1 */}
        <div className="flex items-center space-x-4">
          <img
            src="/legacy-number-1.png"
            alt="Projects"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-semibold outfit">500+</h3>
            <p className="text-[#CCCCCC] text-sm outfit-400-16">
              Projects completed
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center space-x-4">
          <img
            src="/legacy-number-2.png"
            alt="Options"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-semibold outfit">100+</h3>
            <p className="text-[#CCCCCC] text-sm outfit-400-16">
              Tile & stone options
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center space-x-4">
          <img
            src="/legacy-number-3.png"
            alt="Clients"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-semibold outfit">200+</h3>
            <p className="text-[#CCCCCC] text-sm outfit-400-16">
              Happy Clients
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center space-x-4">
          <img
            src="/legacy-number-4.png"
            alt="Established"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-semibold outfit">1992</h3>
            <p className="text-[#CCCCCC] text-sm outfit-400-16">
              Established In
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
