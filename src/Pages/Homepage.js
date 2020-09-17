import React, { useState } from "react";
import styles from "./Homepage.module.scss";
import cx from "classname";
import LocationCard from "../Components/Location_Card/LocationCard";
import { Link } from "react-router-dom";
const Homepage = ({ places }) => {
  // let selectedItem;
  const [selectedItem, setSelectedItem] = useState({});
  console.log("selectedItem");
  console.log(selectedItem);
  return (
    <>
      <div className={cx(styles.homepage_header)}>
        <div className={cx("container", styles.homepage_header_container)}>
          <div className="row h-100 text-light">
            <div className="col-5 h-100 position-relative pr-4">
              {selectedItem && (
                <div className={styles.place_info}>
                  <h1 className="text-123">{selectedItem.placeName}</h1>
                  <p>{selectedItem.description}</p>
                  {selectedItem.id && <button>Booking</button>}
                </div>
              )}
            </div>
            <div className="col-7 h-100 position-relative">
              <div className={cx(styles.place_carousol, "d-flex")}>
                {/* <LocationCard></LocationCard>
                <LocationCard></LocationCard>
                <LocationCard></LocationCard> */}
                {places.map((place) => (
                  <Link to={`/booking/${place.id}`}>
                    <LocationCard
                      onCardClick={onCardClick}
                      place={place}
                    ></LocationCard>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function onCardClick(id) {
    console.log("clickd");
    const item = places.find((place) => place.id === id);
    // console.log(selectedItem);
    setSelectedItem(item);
  }
};

export default Homepage;
