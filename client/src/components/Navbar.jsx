import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { useAuth } from "../context/auth";

const Navbar = ({ handleOpenLogin }) => {
  const [mobileView, setMobileView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   const [auth] = useAuth();
   const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    setMobileView(!mobileView);
  };

  const handleScrollClick=()=>{
    window.scrollTo(0,0);
  }


  const handleGetStartedClick =()=>{
    if(auth.user){
      navigate("/dashboard")
    }else{
      handleOpenLogin()
    }
  }

  return (
    <header className={`md:sticky md:top-5 z-10 bg-primary`}>
      <div
        className={`mt-5 md:mx-8 md:py-5 px-4 rounded-lg flex items-center justify-between transition-all duration-300 md:hover:bg-white ${
          scrolled ? "md:bg-white" : ""
        }`}
      >
        <Logo size={"md:text-4xl text-xl"} />

        <button
          onClick={handleButtonClick}
          className="md:hidden bg-white border rounded-md py-1 px-1 text-gray-800"
        >
          {mobileView ? <FiX size={32} /> : <IoReorderThreeOutline size={32} />}
        </button>

        <nav className="md:flex hidden justify-between items-center gap-8 ">
          <NavLink to="/" className="text-xl text-gray-500" >
            Home
          </NavLink>
          <NavLink to="/terms-and-conditions" className="text-xl text-gray-500" onClick={handleScrollClick}>
            Terms&Conditions
          </NavLink>
          <NavLink to="/privacy-policy" className="text-xl text-gray-500" onClick={handleScrollClick}>
            Privacy Policy
          </NavLink>
          <NavLink to="/about" className="text-xl text-gray-500" onClick={handleScrollClick}>
            About
          </NavLink>

          <button
            className="bg-btn text-white font-bold px-16 py-4 rounded-lg "
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </nav>
      </div>

      {/* For small devices */}
      <div
        className={`md:hidden bg-primary transition-all duration-500 ease-in overflow-hidden ${
          mobileView ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {mobileView && (
          <nav className="flex flex-col justify-between items-center gap-3 ">
            <NavLink to="/" className="text-gray-500"onClick={handleButtonClick}>
              Home
            </NavLink>
            <NavLink to="/terms-and-conditions" className="text-gray-500"onClick={handleButtonClick}>
              Terms&Conditions
            </NavLink>
            <NavLink to="/privacy-policy" className="text-gray-500"onClick={handleButtonClick}>
              Privacy Policy
            </NavLink>
            <NavLink to="/about" className="text-gray-500"onClick={handleButtonClick}>
              About
            </NavLink>

            <button className="bg-[#200e32] text-white font-bold px-16 py-2 rounded-lg"
            onClick={handleGetStartedClick}>
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
