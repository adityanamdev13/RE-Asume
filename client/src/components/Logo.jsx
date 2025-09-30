import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ size = "text-xl" }) => {
  return (
    <Link
      to="/"
      className={`${size} min-w-fit py-1 font-bold bg-blue-950 text-white w-fit px-2 p rounded-tl-2xl rounded-br-2xl font-nunito border-2`}
    >
      Re-Asume
    </Link>
  );
};

export default Logo;
