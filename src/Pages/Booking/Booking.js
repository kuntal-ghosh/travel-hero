import React, { useState, useEffect } from "react";
import styles from "./Booking.module.scss";
import cx from "classname";
import LocationCard from "../../Components/Location_Card/LocationCard";
import { useParams } from "react-router-dom";
const Bookingpage = ({ places }) => {
  // let selectedItem;
  const { placeId } = useParams();
  const [selectedPlace, setSelectedPlace] = useState({});

  useEffect(() => {
    const place = places.find((place) => place.id === placeId);
    setSelectedPlace(place);
  }, [places]);
  console.log(selectedPlace);

  return (
    <>
      <div className={cx(styles.Bookingpage_header)}>
        <div className={cx("container", styles.Bookingpage_header_container)}>
          <div className="row h-100 text-light">
            <div className="col-5 h-100 position-relative pr-4">
              {selectedPlace && (
                <div className={styles.place_info}>
                  <h1 className="text-123">{selectedPlace.placeName}</h1>
                  <p>{selectedPlace.description}</p>
                </div>
              )}
            </div>
            <div className="col-7 h-100 position-relative">
              <div className={cx(styles.booking_form, "d-flex")}>
                cuisdhcuihduh
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function onCardClick(id) {
    console.log("clickd");
  }
};

export default Bookingpage;
