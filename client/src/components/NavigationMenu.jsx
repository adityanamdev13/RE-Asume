import React from "react";
import NavigationElement from "./NavigationElement";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const NavigationMenu = () => {
  return (
    <div className="flex items-center gap-10 justify-center">
      <NavigationElement
        icon={<FaFacebookF size={25} />}
        navTo="https://www.facebook.com/aditya.namdev.1420"
      />

      <NavigationElement
        icon={<FaGithub size={25} />}
        navTo="https://github.com/adityanamdev13"
      />

      <NavigationElement
        icon={<FaLinkedinIn size={25} />}
        navTo="https://www.linkedin.com/in/adityanamdev-13july2000/"
      />

      <NavigationElement
        icon={<FaInstagram size={25} />}
        navTo="https://www.instagram.com/____aditya.namdev/"
      />

      <NavigationElement
        icon={<FaWhatsapp size={25} />}
        navTo="https://wa.me/8120544147"
      />
    </div>
  );
};

export default NavigationMenu;
