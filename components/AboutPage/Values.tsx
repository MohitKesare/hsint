import React from "react";
import Image from "next/image";

const Values = () => {
  return (
    <div className="h-[110vh] w-screen bg-white flex items-center justify-center ">
      <div className="w-[90%] h-[90%]   flex flex-col space-y-4">
        <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-4">
          Our Values
          <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
        </div>
        <div className="flex w-full">
          <div className="fira-code-600 text-[71px]leading-[80px] text-black ml-5 w-[45%]">
            Build On Values That Stand the Test of Time
          </div>
          <p
            className="outfit-400-20 text-[20px]mt-5 text-start text-[#444444] w-[50%] ml-10
          "
          >
            At HS Marble Edge, our century-long legacy is rooted in more than
            just craftsmanship — it&apos;s guided by the values that define who
            we are. These principles shape every project we take on, ensuring we
            deliver not just beautiful spaces, but lasting trust.
          </p>
        </div>
        <div className="h-[60%] w-full  mt-3 flex justify-evenly">
          {/* start here */}
          <div className="group relative w-[30%] h-full border-2 border-[#E6D8CC] rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white">
            {/* Expanding image */}
            <Image
              src="/services-1.png"
              alt="Profile"
              className="
      absolute top-6 transition-all duration-300 ease-in-out
      rounded-[50%] w-24 h-24 object-cover z-10 m-5 group-hover:m-0
      group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:z-0"
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full p-6 text-center space-y-4">
              <h3 className="text-[#222] text-xl font-semibold text-start fira-code-32 text-[32px]group-hover:hidden">
                Quality First
              </h3>
              <p className="text-gray-600 text-sm text-center outfit-400-16 text-[16px]group-hover:hidden">
                We never compromise on materials or execution — every detail
                matters.
              </p>
            </div>
          </div>
          {/* end here */}
          {/* start here */}
          <div className="group relative w-[30%] h-full border-2 border-[#E6D8CC] rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white">
            {/* Expanding image */}
            <Image
              src="/services-2.png"
              alt="Profile"
              className="
      absolute top-6 transition-all duration-300 ease-in-out
      rounded-[50%] w-24 h-24 object-cover z-10 m-5 group-hover:m-0
      group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:z-0"
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full p-6 text-center space-y-4 ">
              <h3 className="text-[#222] text-xl font-semibold text-start fira-code-32 text-[32px]group-hover:hidden">
                Integrity Always
              </h3>
              <p className="text-gray-600 text-sm text-center outfit-400-16 text-[16px]group-hover:hidden">
                Honesty, transparency, and consistency in everything we do.
              </p>
            </div>
          </div>
          {/* end here */}
          {/* start here */}
          <div className="group relative w-[30%] h-full border-2 border-[#E6D8CC] rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white">
            {/* Expanding image */}
            <Image
              src="/services-3.png"
              alt="Profile"
              className="
      absolute top-6 transition-all duration-300 ease-in-out
      rounded-[50%] w-24 h-24 object-cover z-10 m-5 group-hover:m-0
      group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:z-0"
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full p-6 text-center space-y-4">
              <h3 className="text-[#222] text-xl font-semibold text-start fira-code-32 text-[32px]group-hover:hidden">
                Customer Centric Approach
              </h3>
              <p className="text-gray-600 text-sm text-center outfit-400-16 text-[16px]group-hover:hidden">
                Your vision is our priority. We listen, adapt, and deliver to
                exceed expectations.
              </p>
            </div>
          </div>
          {/* end here */}
        </div>
        {/* <button>Lets Build Together</button> */}
      </div>
    </div>
  );
};

export default Values;
