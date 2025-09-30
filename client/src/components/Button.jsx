import React from "react";

const Button = ({ btnTitle, loading ,type="submit",handleClick}) => {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={handleClick}
      className=" my-8 font-semibold px-20 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500  text-white hover:opacity-75 disabled:opacity-50 outline-none"
    >
      {btnTitle}
    </button>
  );
};

export default Button;
