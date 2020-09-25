import { Card } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";

const Hotel = ({ hotel }) => {
  return (
    <Card
      className="row mt-5 p-3"
      //  style={{ backgroundColor: "red" }}
    >
      <div className="col-5">
        <img
          src={hotel.imageUrl}
          alt="hotel"
          style={{ width: "100%", minHeight: "15rem" }}
        />
      </div>
      <div
        className="col-7"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          //   backgroundColor: "yellow",
        }}
      >
        <div className="row ">
          <div className="col-12">
            <h2> {hotel.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h6>{hotel.guests} guests</h6>
          </div>
          <div className="col-3">
            <h6>{hotel.rooms} bedroom</h6>
          </div>
          <div className="col-3">
            <h6>{hotel.beds} beds</h6>
          </div>
          <div className="col-3">
            <h6>{hotel.baths} bthroom</h6>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <h6>wifi air conditioning kitchen</h6>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <h6>cancelation flexibility available</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h6>
              <Star style={{ color: "yellow" }} />
              {`
              ${hotel.rating}(${hotel.rating})`}
            </h6>
          </div>
          <div className="col-4">
            <h6>${hotel.cost}/night</h6>
          </div>
          <div className="col-4">
            <h6>${hotel.cost * hotel.rooms}total</h6>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Hotel;
