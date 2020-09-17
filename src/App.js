import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import FakeData from "./FakeData";
import { Switch, Route, Link } from "react-router-dom";
import Bookingpage from "./Pages/Booking/Booking";
function App() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    setPlaces(FakeData);
  }, []);
  return (
    <>
      {/* <div className={styles.App}>hello</div> */}
      <Navbar></Navbar>
      <Switch>
        <Route path="/homepage">
          {/* <Homepage places={places}></Homepage> */}
        </Route>
        <Route path="/booking/:placeId">
          <Bookingpage places={places}></Bookingpage>
        </Route>
        <Route path="/">
          <Homepage places={places}></Homepage>
        </Route>
      </Switch>
    </>
  );
}

export default App;
