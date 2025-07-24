"use client";
import React, { useEffect, useState } from "react";

const words = ["Elegance", "Precision", "Design", "Craftmanship", "Legacy"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="  w-full flex items-center justify-center h-[87vh] ">
      <div className="flex flex-col    text-center text-white items-center space-y-6 ">
        <div className="flex flex-col  items-center justify-center w-[100%] fira-code-400 text-[24px] md:text-[48px] lg:text-[64px] text-center ">
          Shaping Your Space with&nbsp;
          <div className="relative h-[75px] overflow-hidden inline-block text-left">
            <div
              className="flex flex-col w-fit transition-transform duration-500 ease-in-out  items-center justify-center "
              style={{ transform: `translateY(-${index * 75}px)` }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  className="h-[75px] leading-[75px] inline-block w-fit fira-code-italic text-[24px] md:text-[48px] lg:text-[64px] "
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-lg outfit">
          At HS Marble Edge, we’ve been transforming interiors with timeless
          design and premium stonework since 1922 — blending art, material, and
          legacy.
        </p>

        <div className="w-42 h-15 mt-6 border-1 border-[#FFFFFF45] rounded-md hover:bg-[#C5A387] transition-all duration-300 hover:-translate-y-1">
          <div className="w-full h-full border-1 border-[#FFFFFF45] rounded-md relative -top-1 right-1 text-center flex items-center justify-center hover:bg-[#444444] transition-all duration-300 ">
            {" "}
            View Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
