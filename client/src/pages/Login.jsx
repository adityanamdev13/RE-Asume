import React, { useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import Button from "../components/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ handleCloseLogin, handleOpenSignup }) => {
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    handleOpenSignup();
    handleCloseLogin();
  };

  const togglePassword = () => {
    setVisible(!visible);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (password.length < 6) {
        setPasswordError("Password must be at least 6 characters");
        return;
      }
      const response = await axios.post(
        `${import.meta.env.VITE_HOST_URI}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        handleCloseLogin();
        setEmail("");
        setPassword("");
        navigate("/dashboard");
        toast.success(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid password Or email!");
      } else {
        toast.error("Login failed! Please try again.");
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form className="md:min-w-[25rem] min-w-[18rem]" onSubmit={handleSubmit}>
        <h1 className="text-center font-semibold text-3xl ">Login</h1>

        <div className="  space-y-4 mt-12 text-xl text-gray-500 md:px-4">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 border-gray-400 outline-none text-black mt-2 pb-1 px-2 w-full"
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  className="border-b-2 border-gray-400 outline-none text-black mt-2 pb-1 px-2 w-full"
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
            {passwordError && (
              <div className="text-red-600 text-sm ">{passwordError}</div>
            )}
          </div>
          <div className="flex justify-center">
            <Button
              btnTitle={
                !loading ? (
                  "Login"
                ) : (
                  <>
                    <FaSpinner size={25} className="animate-spin" />
                  </>
                )
              }
              loading={loading}
            />
          </div>
          <p
            className="text-center  text-base cursor-pointer hover:opacity-75 hover:underline"
            onClick={handleClick}
          >
            Create account
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
