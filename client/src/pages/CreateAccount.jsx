import React, { useState } from "react";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import Button from "../components/Button";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const CreateAccount = ({ handleCloseSignup, handleOpenLogin }) => {
  const [visible, setVisible] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    handleOpenLogin();
    handleCloseSignup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const togglePassword = () => {
    setVisible(!visible);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      const response = await axios.post(
        `${import.meta.env.VITE_HOST_URI}/api/v1/auth/register`,
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData({ fullname: "", email: "", password: "" });
        handleClick();
      }
    } catch (error) {
      if (error.response && error.response.data.success === false) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Internal Server error");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="md:min-w-[25rem]" onSubmit={handleSubmit}>
      <h1 className="text-center font-semibold text-3xl  ">Create Account</h1>

      <div className="space-y-4 mt-12 text-xl text-gray-500 md:px-4">
        <div>
          <label
            htmlFor="fullname"
            className="flex items-center gap-2 font-semibold"
          >
            <CiUser />
            <span>Name</span>
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="border-b-2 border-gray-400 outline-none text-black mt-1 pb-1 px-2 w-full"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="flex items-center gap-2 font-semibold"
          >
            <CiMail />
            <span>Email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-gray-400 outline-none text-black mt-1 pb-1 px-2 w-full"
            required
          />
        </div>

        <div>
          <div>
            <label
              htmlFor="password"
              className="flex items-center gap-2 font-semibold"
            >
              <CiLock />
              <span>Password</span>
            </label>
            <div className="relative">
              <input
                type={visible ? "password" : "text"}
                name="password"
                id="password"
                value={formData.password}
                onChange={(e) => {
                  handleChange(e);
                  setError("");
                }}
                className="border-b-2 border-gray-400 outline-none text-black mt-1 pb-1 px-2 w-full"
                required
              />
              <span
                className="font-semibold absolute cursor-pointer text-base right-0 bottom-3"
                onClick={togglePassword}
              >
                {visible ? "Show" : "Hide"}
              </span>
            </div>
          </div>
          {error && <div className="text-red-600 text-sm ">{error}</div>}
        </div>
        <div className="flex justify-center">
          <Button
            btnTitle={
              !loading ? (
                "Create Account"
              ) : (
                <>
                  <FaSpinner size={25} className="animate-spin" />
                </>
              )
            }
            loading={loading}
          />
        </div>
        <p className="text-center text-base">
          Have already an account?{" "}
          <span
            className="cursor-pointer hover:opacity-75 hover:underline font-semibold"
            onClick={handleClick}
          >
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default CreateAccount;
