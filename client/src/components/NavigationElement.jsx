import React from "react";

const NavigationElement = ({ icon, navTo }) => {
  return (
    <div className="">
      <a href={navTo} target="_blank">{icon}</a>
    </div>
  );
};

export default NavigationElement;
