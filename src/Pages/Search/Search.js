import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FakeData from "../../FakeData";
import MapContainer from "./Google_Map/Google_Map";
import Map from "./Google_map_library/Google_map_library";
import Hotel from "./hotels/hotel";

const Search = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 21.417242,
    lng: 91.9823578,
  };
  const { placeId } = useParams();
  const [hotels, setHotels] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    let selectedLocation = FakeData.find((location) => location.id === placeId);
    setSelectedLocation(selectedLocation);
    let { hotels } = selectedLocation;
    setHotels(hotels);
    // console.log(selectedLocationHotels);
  }, []);
  console.log(hotels);
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "10rem", height: "100vh" }}
      >
        <div className="row col-12">
          <div className="col-7">
            <div>
              <p>252 stays april 13-17 guests</p>
            </div>
            <div>
              <h1>stay in {selectedLocation.placeName}</h1>
            </div>
            <div className="mt-5">
              {hotels.map((hotel) => (
                <Hotel hotel={hotel}></Hotel>
              ))}
            </div>
          </div>
          <div
            className="col-5"
            style={{ position: "relative", width: "100%", Height: "100%" }}
          >
            {/* <MapContainer></MapContainer> */}
            {/* <Map ></Map> */}
            <Map
              location={location}
              zoomLevel={12}
              hotels={hotels}
              selectedLocation={selectedLocation}
            ></Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
