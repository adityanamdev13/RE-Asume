import React from "react";
import { FaLock, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

const LoginRequired = ({ content, title, handleOpenLogin }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    handleOpenLogin();
  };

  return (
    <div className=" flex flex-col items-center justify-center  m-10 text-gray-900">
      <div className="m-8">
        <Logo size={"text-2xl"} />
      </div>
      <div className="bg-white p-8 pb-0 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center mb-6">
          <FaLock className="text-6xl mx-auto mb-4" />
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600 mt-2">{content}</p>

          <Button
            btnTitle=" Go to Login"
            type="button"
            handleClick={handleClick}
          />
        </div>
      </div>

     
      <p className="text-gray-500 text-center py-3 md:text-xl mt-8">
        &copy; {new Date().getFullYear()}, Re-Asume.com, Inc. All rights
        reserved.
      </p>
    </div>
  );
};

export default LoginRequired;
