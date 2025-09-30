import React, { useState } from "react";
import Logo from "../components/Logo";
import { FaRegCircleUser, FaPlus } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeTemplateModal from "../components/ResumeTemplateModal";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem("auth");
    toast.success("Logout Successful");
    navigate("/");
  };

  return (
    <>
      <div className="md:flex bg-primary">
        {/* Side Panel */}
        <aside className="bg-secondary md:h-screen md:sticky top-0 md:w-[250px] flex md:flex-col justify-between overflow-hidden ">
          <div className="mt-12 ">
            <div className="text-center">
              <Logo size="text-2xl" />
            </div>
            <div className="md:flex flex-col hidden  items-end ">
              <div className="flex flex-nowrap justify-center items-center gap-2 mt-8 bg-primary py-3 pl-4 pr-1 rounded-lg rounded-r-none border border-r-0 ml-4 ">
                <FaRegCircleUser className="md:text-3xl" />
                <div>
                  <h2 className="text-sm font-semibold ">
                    {auth?.user?.fullname}
                  </h2>
                  <p className="text-[12px] text-gray-600">{auth?.user?.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8">
            <button
              className="mb-8 w-full text-sm text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 flex justify-center items-center gap-2"
              onClick={handleLogout}
            >
              <span>Logout</span> <IoIosLogOut size={18} />
            </button>
          </div>
        </aside>

        <main className="md:w-[82%] p-8 ">
          <h1 className="text-2xl font-bold">My Resumes</h1>
          <div className="grid md:grid-cols-3 gird-col-1 my-10 gap-4">
            <div
              className="border-2 rounded-lg border-dashed py-48 border-gray-400 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="flex flex-col items-center justify-center text-gray-500">
                <FaPlus />
                <p className="font-bold ">New Resume</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ResumeTemplateModal
        handleclose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </>
  );
};

export default Dashboard;
