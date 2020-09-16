import React from "react";
import styles from "./Homepage.module.scss";
import cx from "classname";
import LocationCard from "../Components/Location_Card/LocationCard";
const Homepage = () => {
  return (
    <>
      <div className={cx(styles.homepage_header)}>
        <div className={cx("container", styles.homepage_header_container)}>
          <div className="row h-100 text-light">
            <div className="col-5 h-100 position-relative">
              <div className={styles.place_info}>
                <h1 className="text-123">place name</h1>
              </div>
            </div>
            <div className="col-7 h-100 position-relative">
              <div
                className={cx(styles.place_carousol, "d-flex")}
              >
                <LocationCard></LocationCard>
                <LocationCard></LocationCard>
                <LocationCard></LocationCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
