import React, { useContext } from "react";
import styles from "./Navbar.module.scss";
import cx from "classname";
import logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import navbarColorContext from "../Context/NavbarColorContext";
const Navbar = () => {
  const location = useLocation();
  // const classes = useStyles();
  console.log("location");
  console.log(location.pathname);

  // const [navbarColor, setNavbarColor] = useContext(navbarColorContext);
  let logoColor;
  let inputColor;
  let inputPlaceholderColorClass;
  let navLinkColor;
  if (location.pathname === "/signin" || location.pathname === "/signup") {
    console.log("true");
    logoColor = { filter: "invert(0%)" };
    inputColor = { borderColor: "black", color: "black" };
    inputPlaceholderColorClass = styles.input_dark;
    navLinkColor = { color: "black" };
  } else {
    logoColor = { filter: "invert(100%)" };
    inputColor = null;
    inputPlaceholderColorClass = null;
    navLinkColor = null;
  }
  return (
    <>
      <div className={cx(styles.navbar_container, "container d-flex")}>
        <ul className={cx(styles.navbar_container_ul, "d-flex")}>
          <li className={styles.navbar_container_ul_li_img}>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={logoColor}
                //   className={styles.navbar_container_ul_li_img}
              />
            </Link>
          </li>
          <li className={styles.navbar_container_ul_li_input}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search your Destination"
              style={inputColor}
              className={inputPlaceholderColorClass}
              //   className={styles.navbar_container_ul_li_input}
            />
          </li>
        </ul>
        <ul className={cx(styles.navbar_container_ul, "d-flex")}>
          <li className={styles.navbar_container_ul_li} style={navLinkColor}>
            News
          </li>
          <li className={styles.navbar_container_ul_li} style={navLinkColor}>
            Destination
          </li>
          <li className={styles.navbar_container_ul_li} style={navLinkColor}>
            Blog
          </li>
          <li className={styles.navbar_container_ul_li} style={navLinkColor}>
            Contact
          </li>
          <li className={styles.navbar_container_ul_li}>
            <Link to="/signin">
              <button onClick={onLoginClick}>Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  function onLoginClick(e) {
    // e.preventDefault();
  }
};

export default Navbar;
