import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./Google_map_library.module.scss";
import LocationPin from "./LocationPin";
import mapApiKey from "../../../google.config";

const Map = ({ location, zoomLevel, hotels, selectedLocation }) => {
  console.log("hotels in map");
  console.log(hotels);
  return (
    <div className="map">
      <h2 className="map-h2 text-center mb-5">
        Come Visit Us At {selectedLocation.placeName}{" "}
      </h2>

      <div className={styles.google_map} style={{ height: "550px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: { mapApiKey } }}
          defaultCenter={hotels[0] && (hotels[0].location || location)}
          defaultZoom={zoomLevel}
        >
          {hotels.map((hotel) => (
            // console.log(hotel);

            <LocationPin
              key={hotel.id}
              lat={hotel.location.lat}
              lng={hotel.location.lng}
              text={hotel.cost}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
