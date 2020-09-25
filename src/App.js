import React, { useState, useEffect, createContext } from "react";
// import logo from "./logo.svg";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import FakeData from "./FakeData";
import { Switch, Route, Link } from "react-router-dom";
import Bookingpage from "./Pages/Booking/Booking";
import SignIn from "./Pages/SignIn/SignIn";
import Signup from "./Pages/SignUp/Signup";
import navbarColorContext from "./Context/NavbarColorContext";
import userContext from "./Context/userContext";
import placesContext from "./Context/placesContext";
import bookingContext from "./Context/bookingContext";

import user from "./Models/user";
import Search from "./Pages/Search/Search";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  const [places, setPlaces] = useState([]);
  const [navbarColor, setNavbarColor] = useState({ color: "white" });
  const [loggedInUser, setloggedInUser] = useState({ email: "", password: "" });
  const [booked, setBooked] = useState({});
  useEffect(() => {
    setPlaces(FakeData);
  }, []);

  console.log("loggedInUser");
  console.log(loggedInUser);
  console.log("booked");
  console.log(booked);

  return (
    <>
      {/* <div className={styles.App}>hello</div> */}
      <userContext.Provider value={[loggedInUser, setloggedInUser]}>
        <Navbar user={loggedInUser}></Navbar>
        <bookingContext.Provider value={[booked, setBooked]}>
          <Switch>
            <Route path="/homepage">
              {/* <Homepage places={places}></Homepage> */}
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/booking/:placeId">
              <Bookingpage places={places}></Bookingpage>
            </Route>
            <PrivateRoute path="/search/:placeId">
              <Search></Search>
            </PrivateRoute>
            <Route exact path="/">
              <Homepage places={places}></Homepage>
            </Route>
          </Switch>
        </bookingContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
