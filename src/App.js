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

function App() {
  const [places, setPlaces] = useState([]);
  const [navbarColor, setNavbarColor] = useState({ color: "white" });
  useEffect(() => {
    setPlaces(FakeData);
  }, []);

  
  return (
    <>
      {/* <div className={styles.App}>hello</div> */}
      <navbarColorContext.Provider value={[navbarColor, setNavbarColor]}>
        <Navbar></Navbar>
      </navbarColorContext.Provider>

      <Switch>
        <Route path="/homepage">
          {/* <Homepage places={places}></Homepage> */}
        </Route>
        <Route path="/signin">
          <navbarColorContext.Provider value={[navbarColor, setNavbarColor]}>
            <SignIn></SignIn>
          </navbarColorContext.Provider>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/booking/:placeId">
          <Bookingpage places={places}></Bookingpage>
        </Route>
        <Route exact path="/">
          <Homepage places={places}></Homepage>
        </Route>
      </Switch>
    </>
  );
}

export default App;
