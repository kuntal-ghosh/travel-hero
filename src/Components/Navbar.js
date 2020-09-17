import React, { useContext } from "react";
import styles from "./Navbar.module.scss";
import cx from "classname";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import navbarColorContext from "../Context/NavbarColorContext";
const Navbar = () => {
  const [navbarColor, setNavbarColor] = useContext(navbarColorContext);
  return (
    <>
      <div className={cx(styles.navbar_container, "container d-flex")}>
        <ul className={cx(styles.navbar_container_ul, "d-flex")}>
          <li className={styles.navbar_container_ul_li_img}>
            <img
              src={logo}
              alt="logo"
              //   className={styles.navbar_container_ul_li_img}
            />
          </li>
          <li className={styles.navbar_container_ul_li_input}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search your Destination"
              //   className={styles.navbar_container_ul_li_input}
            />
          </li>
        </ul>
        <ul className={cx(styles.navbar_container_ul, "d-flex")}>
          <li className={styles.navbar_container_ul_li}>news</li>
          <li className={styles.navbar_container_ul_li}>Destination</li>
          <li className={styles.navbar_container_ul_li}>Blog</li>
          <li className={styles.navbar_container_ul_li}>Contact</li>
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