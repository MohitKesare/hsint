// "use client";

// import React from "react";

// import { testimonials } from "@/data";
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// const Clients = () => {
//   return (
//     <section
//       id="testimonials"
//       className="py-20 flex flex-col justify-center items-center  bg-[#2C2C2C]"
//     >
//       <div className="w-[90%] h-fit justify-center items-center lg:h-[30vh] flex flex-col space-y-5 lg:flex-row ">
//         <div className="w-[50%]  flex flex-col justify-evenly lg:ml-10 items-center lg:items-start">
//           <div className="outfit-400-20 text-[20px] text-[#E6D8CC] w-fit p-3 ">
//             What Our Clients say
//             <div className=" w-[40%] md:w-[85%] h-[1.2px] bg-[#996830] mt-1"></div>
//           </div>
//           <div className="fira-code-400 text-[54px] text-white leading-[55px] mt-4 md:p-3  w-fit text-center lg:text-start">
//             Hear from those who{" "}
//             <span className="fira-code-400-italic">trusted our craft</span>
//           </div>
//         </div>
//         <div className="w-[80%] md:w-[50%]  flex items-center justify-center text-center lg:text-start ">
//           <div className="text-[#E6D8CC] outfit-400-20 text-[20px] w-fit lg:ml-5 lg:mt-4">
//             We take pride in every project we deliver — but nothing speaks
//             louder than the words of our clients. Here’s what they have to say
//             about our craftsmanship, service, and lasting impact on their spaces
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center max-lg:mt-10">
//         <div
//           // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
//           className="h-[65vh] md:h-[50vh] w-screen  rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
//         >
//           <InfiniteMovingCards
//             items={testimonials}
//             direction="right"
//             speed="normal"
//           />
//         </div>

//         {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
//           {companies.map((company) => (
//             <React.Fragment key={company.id}>
//               <div className="flex md:max-w-60 max-w-32 gap-2">
//                 <img
//                   src={company.Image}
//                   alt={company.name}
//                   className="md:w-10 w-5"
//                 />
//                 <img
//                   src={company.nameImage}
//                   alt={company.name}
//                   width={company.id === 4 || company.id === 5 ? 100 : 150}
//                   className="md:w-24 w-20"
//                 />
//               </div>
//             </React.Fragment>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Clients;

"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-10 bg-[#2C2C2C] flex flex-col items-center"
    >
      {/* Heading and description */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-10 lg:gap-y-0 gap-x-10">
        {/* Left column: Heading */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          <div className="outfit-400-20 text-[18px] md:text-[20px] text-[#E6D8CC] w-fit p-3">
            What Our Clients Say
            <div className="w-1/2 md:w-[85%] h-[1.2px] bg-[#996830] mt-1"></div>
          </div>
          <h2 className="fira-code-400 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] text-white leading-tight text-center lg:text-left mt-4 md:p-3">
            Hear from those who{" "}
            <span className="fira-code-400-italic">trusted our craft</span>
          </h2>
        </div>

        {/* Right column: Paragraph */}
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center lg:text-left">
          <p className="text-[#E6D8CC] outfit-400-20 text-[16px] md:text-[20px] w-full max-w-xl lg:ml-5 lg:mt-4">
            We take pride in every project we deliver — but nothing speaks
            louder than the words of our clients. Here’s what they have to say
            about our craftsmanship, service, and lasting impact on their
            spaces.
          </p>
        </div>
      </div>

      {/* Cards section */}
      <div className="w-full max-w-7xl mt-12">
        <div className="h-[30rem] md:h-[24rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
