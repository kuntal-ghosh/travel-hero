import React from "react";
// import logo from "./logo.svg";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      {/* <div className={styles.App}>hello</div> */}
      <Navbar></Navbar>
      <Homepage></Homepage>
    </>
  );
}

export default App;
