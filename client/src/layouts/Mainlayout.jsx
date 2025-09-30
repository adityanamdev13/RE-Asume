import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Mainlayout = ({handleOpenLogin}) => {
  return (
    <>
      <Navbar handleOpenLogin={handleOpenLogin} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainlayout;
