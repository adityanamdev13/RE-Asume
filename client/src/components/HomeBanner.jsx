import React from "react";
import { IoNewspaperSharp, IoMailOpenOutline } from "react-icons/io5";
import { FaPenNib, FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const HomeBanner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between md:items-start mt-20 md:px-8 gap-2 ">
      <div>
        <h1 className="md:text-[5rem]  text-3xl font-bold leading-none mt-5">
          Unlock your Full Potential
        </h1>
        <hr className="border-teal-800 mr-6 my-8 " />
        <p className="text-2xl font-semibold ">
          Transform Your Career with Our Seamless Resume Builder – Start
          Crafting Your Success Today!"
        </p>
        <button className="flex bg-btn text-white font-bold px-6 py-3 items-center gap-2 rounded-lg my-8 ">
          <MdArrowOutward size={50} />
          <span>Get started - It’s free ✨ </span>
        </button>
      </div>
      <div className="bg-[#e8e6e3] shrink-0 min-w-80 md:w-[35rem]  min-h-80 md:h-[35rem] border-2  border-white rounded-[4rem] shadow-2xl relative">
        <div className="bg-pink-800 text-white  w-fit p-2 rounded-full rounded-bl-none absolute md:right-4 right-2 top-40">
          <IoNewspaperSharp size={25} />
        </div>
        <div className="bg-lime-800 text-white  w-fit p-2 rounded-full rounded-bl-none  absolute md:right-20 right-16 md:top-60 top-28">
          <FaPenNib size={25} />
        </div>
        <div className="bg-purple-800 text-white  w-fit p-2 rounded-full rounded-bl-none  absolute md:right-24 right-4 top-10 md:top-16 ">
          <IoMailOpenOutline size={25} />
        </div>

        <img
          src="https://assets.flowcvassets.com/landing/flowcv-hero-image-kim-800.webp"
          alt="bannner-1"
          className="absolute bottom-0 object-contain rounded-bl-[4rem] rounded-br-[2rem] h-96 w-96 md:w-auto  md:h-[40rem] "
        />

        <div className="rating-card absolute md:bottom-28 bottom-[-1rem] md:left-[-8rem] flex bg-white rounded-xl items-center p-3 gap-3">
          <div className="text-sm">
            <h3 className="font-semibold ">Aditya Namdev</h3>
            <p className=" text-gray-500">Full Stack Developer</p>
            <div className="flex items-center gap-2 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="bg-pink-500 font-bold text-white text-xl px-3 p-1 rounded-full">
            A
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
