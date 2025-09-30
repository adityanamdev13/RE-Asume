import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./app.css";
import Mainlayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import About from "./pages/About";
import Modal from "./components/Modal";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSingUp] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenSignup = () => setOpenSingUp(true);
  const handleCloseSignup = () => setOpenSingUp(false);
  return (
    <>
      <Toaster />

      <Routes>
        <Route
          path="/"
          element={<Mainlayout handleOpenLogin={handleOpenLogin} />}
        >
          <Route index element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<ProtectedRoute handleOpenLogin={handleOpenLogin} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>

      <Modal
        isOpen={openLogin}
        content={
          <Login
            handleCloseLogin={handleCloseLogin}
            handleOpenSignup={handleOpenSignup}
          />
        }
        onClose={handleCloseLogin}
      />
      <Modal
        isOpen={openSignup}
        content={
          <CreateAccount
            handleCloseSignup={handleCloseSignup}
            handleOpenLogin={handleOpenLogin}
          />
        }
        onClose={handleCloseSignup}
      />
    </>
  );
};

export default App;
