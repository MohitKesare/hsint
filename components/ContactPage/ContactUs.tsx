import Link from "next/link";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="h-[130vh] w-full flex justify-center items-center bg-white mt-20">
      <div className="h-[90%] w-[90%]  flex flex-col">
        <div className="flex flex-col">
          <div className="outfit-400-14 flex flex-col w-fit text-[#996830] ml-5 mt-4">
            CONTACT US
            <div className="w-[85%] h-[1.2px] bg-[#996830] mt-2"></div>
          </div>
          <div className="fira-code-600 text-[71px]leading-[80px] text-black ml-5">
            Let&apos;s Connect & Create
            <br /> Something{" "}
            <span className="fira-code-italic">Exceptional</span>
          </div>
        </div>

        <div className="w-full h-full  mt-8 flex ">
          <div className="w-[50%] h-full flex flex-col ">
            <div className="flex space-x-10 ml-10 mt-5">
              <div>
                <h3 className="outfit-400-20 text-[20px]text-[#2c2c2c]">
                  First Name*
                </h3>
                <input
                  type="text"
                  name="firstName"
                  className="border-b-2 border-[#C4A386] mt-5 focus:outline-none focus:border-[#996830] text-black placeholder:text-gray-400"
                />
              </div>
              <div>
                <h3 className="outfit-400-20 text-[20px]text-[#2c2c2c]">
                  Last Name*
                </h3>
                <input
                  type="text"
                  name="LastName"
                  className="border-b-2 border-[#C4A386] mt-5 focus:outline-none focus:border-[#996830] text-black placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex space-x-10 ml-10 mt-5">
              <div>
                <h3 className="outfit-400-20 text-[20px]text-[#2c2c2c]">
                  Email*
                </h3>
                <input
                  type="email"
                  name="email"
                  className="border-b-2 border-[#C4A386] mt-5 focus:outline-none focus:border-[#996830] text-black placeholder:text-gray-400"
                />
              </div>
              <div>
                <h3 className="outfit-400-20 text-[20px]text-[#2c2c2c]">
                  Phone
                </h3>
                <input
                  type="text"
                  name="LastName"
                  className="border-b-2 border-[#C4A386] mt-5 focus:outline-none focus:border-[#996830] text-black placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 ml-10">
              <label className="block font-semibold mb-1 outfit-400-20 text-[20px]text-[#2c2c2c]">
                Services you want:
              </label>
              <div className="flex space-x-5 mt-5">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="marbleFitting " />
                  <p className="outfit-400-20 text-[20px]text-[#2c2c2c]">
                    Marble Fitting
                  </p>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="tileInstallation " />
                  <p className="outfit-400-20 text-[20px]text-[#2c2c2c]">
                    Tile Installations
                  </p>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="graniteFitting " />
                  <p className="outfit-400-20 text-[20px]text-[#2c2c2c]">
                    Granite Fitting
                  </p>
                </label>
              </div>
            </div>
            <div className="ml-10 mt-6 flex flex-col">
              <p className="outfit-400-20 text-[20px]text-[#2c2c2c]">Message</p>
              <textarea
                name="message"
                placeholder="Type your message here..."
                rows={4}
                className="w-full border-1 border-[#2c2c2c] p-2 rounded mt-3 text-black placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center mt-6 ml-10">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="w-4 h-4 text-[#996830] focus:ring-[#996830] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-[#2c2c2c]">
                I accept the{" "}
                <span className="text-[#996830] underline cursor-pointer">
                  terms and conditions
                </span>
              </label>
            </div>
            <button className="bg-[#996830] w-[8rem] h-[5vh] ml-10 mt-5 cursor-pointer">
              Submit
            </button>
          </div>
          <div className="w-[50%] h-full flex flex-col ">
            <div className="flex justify-around mt-10">
              <div className="flex flex-col space-y-4">
                <Image src="email.png" alt="" className="w-[2vw]" />
                <h3 className="outfit-30 text-[30px]text-[#996830]">Email</h3>
                <p className="underline outfit-400-16 text-[16px]text-[#2c2c2c]">
                  hsinterior@gmail.com
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Image src="phone.png" alt="" className="w-[2vw]" />
                <h3 className="outfit-30 text-[30px]text-[#996830]">Phone</h3>
                <p className="underline outfit-400-16 text-[16px]text-[#2c2c2c]">
                  9767457282
                </p>
              </div>
            </div>
            <div className="flex items-start mt-10 ml-30">
              <div className="flex flex-col ">
                <Image src="address.png" alt="" className="w-[2vw]" />
                <h3 className="outfit-30 text-[30px]text-[#996830]">Address</h3>
                <p className="underline outfit-400-16 text-[16px]text-[#2c2c2c]">
                  Infront Of Dmart, Hinjewadi, Pune
                </p>
              </div>
            </div>
            <div className="h-[30vh] w-[40vw]  mt-10 ml-10 overflow-hidden">
              <Link href={"/"}>
                {" "}
                <Image src="location.png" alt="" className="w-full " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
