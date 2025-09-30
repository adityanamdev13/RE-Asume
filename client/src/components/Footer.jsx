import React from "react";
import Logo from "./Logo";
import { MdArrowOutward } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { BiLockOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoInformationCircleOutline } from "react-icons/io5";
import NavigationMenu from "./NavigationMenu";

const Footer = () => {
  const handleScroll = () => {
    window.scroll(0, 0);
  };
  return (
    <footer className="bg-footer text-gray-300">
      <div className="w-full py-10 md:px-10 px-5">
        <h4 className="md:text-xl mb-5 ">Do you have any feedback for us?</h4>

        <form className="flex items-center bg-transparent border-2 px-5 py-5 rounded-lg md:w-[40%]">
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            placeholder="Enter your feedback here..."
          />
          <button type="submit" className="text-pink-800">
            <MdArrowOutward size={35} />
          </button>
        </form>
      </div>
      <div className="md:mx-12 mx-5 py-6  ">
        <Logo />
        <p className="md:w-96 mt-6 text-lg">
          Our mission: Empower job seekers worldwide. We are here to make your
          journey smoother, more enjoyable and ultimately more successful.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between md:px-12 px-5 my-6 ">
        <div className="mb-4 md:mb-0">
          <Link
            to="/terms-and-conditions"
            onClick={handleScroll}
            className="flex items-center gap-2 text-xl"
          >
            <BsChatLeftText />
            <span className="pb-2">Terms&Conditions</span>
          </Link>

          <Link
            to="/privacy-policy"
            onClick={handleScroll}
            className="flex items-center gap-2 text-xl"
          >
            <BiLockOpen />
            <span className="pb-2">Privacy Policy</span>
          </Link>

          <Link
            to="/about"
            onClick={handleScroll}
            className="flex items-center gap-2 text-xl"
          >
            <IoInformationCircleOutline />
            <span className="pb-2">About us</span>
          </Link>
        </div>

        <div className="flex  flex-wrap items-center text-xl md:gap-16 justify-center gap-5">
          <span className="font-bold ">Tell your friends about us</span>
          <NavigationMenu/>
        </div>
      </div>

      <hr className="md:mx-12 mx-5" />
      <p className="text-center py-3 md:text-xl">
        &copy; {new Date().getFullYear()}, Re-Asume.com, Inc. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
