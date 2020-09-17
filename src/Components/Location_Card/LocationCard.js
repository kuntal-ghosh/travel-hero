import React, { useState } from "react";
// import { Card, Button } from "react-bootstrap";
import cox from "../../assets/Image/Rectangle 1.png";
import styles from "./LocationCard.module.scss";
import FakeData from "../../FakeData.js";
import cx from "classname";

const LocationCard = ({ place, onCardClick }) => {
  console.log(FakeData);
  // const [border, setBorder] = useState(false);
  // let pStyle = border ? { color: "red" } : { color: "green" };

  let addBorderOnClick;
  let bgStyle = {
    backgroundImage: `linear-gradient(
    0.12deg,
    #000000 0.1%,
    rgba(0, 0, 0, 0) 69.96%
  ),
  url("/images/${place.image}.png")`,
  };

  return (
    <>
      <div
        className={cx(styles.card, addBorderOnClick)}
        style={bgStyle}
        onClick={(e) => {
          console.log(e);
          onCardClickStyle(place.id);
          onCardClick(place.id);
        }}
      >
        <h6>{place.placeName}</h6>
      </div>
    </>
  );

  function onCardClickStyle(id) {
    // console.log(...e.target.style);
    // e.target.style.border;
    // console.log(e.?target.classList);
    // addBorderOnClick = styles.on_click_border;
    // pStyle.color = "green";
    // setBorder(true);
  }
};

export default LocationCard;
