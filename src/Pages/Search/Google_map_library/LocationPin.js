/* eslint-disable react/react-in-jsx-scope */
import React from "react";

import { Icon } from "@iconify/react";
// import home from "@iconify/icons-mdi-light/home";

import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => {
  return (
    <div className="pin">
      <Icon
        icon={locationIcon}
        className="pin-icon"
        style={{ color: "red !important", fontSize: "30px" }}
      />
      <p className="pin-text">${text}</p>
    </div>
  );
};
export default LocationPin;
