import React, { useContext, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
// import navbarColorContext from "../../Context/NavbarColorContext";
import styles from "./Signin.module.scss";
import { Link, useLocation } from "react-router-dom";
import { TextField, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {
  // MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
// import Grid from "@material-ui/core/Grid";
import cx from "classname";
import userContext from "../../Context/userContext";
// import user from "../../Models/user";
import * as firebase from "../../services/firebase.auth";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // height: "100%",
    // padding: "20px",
    // display: "flex",
    // flexWrap: "wrap",

    // justifyContent: "center",
    // textAlign: "center",
    margin: "20px auto",
    "& > *": {
      //   textAlign: "center",
      // margin: "0 auto",

      margin: theme.spacing(1),
      width: "60ch",
      display: "block",
    },
    "& .MuiButton-fullWidth": {
      marginTop: "30px",
      width: "95% !important",
      paddingTop: "12px",
      backgroundColor: "rgba(249,165,26,1)",
    },
    "& .MuiFormHelperText-root": {
      // textAlign: "center",
      // width: "100%",
    },
  },
  input: {
    minHeight: "100px",
  },
  datepicker: {
    // padding: theme.spacing(2),
  },
}));

const SignIn = () => {
  //   const [navbarColor, setNavbarColor] = useContext(navbarColorContext);
  //   let newColor = { ...navbarColor };
  //   setNavbarColor(newColor);
  const location = useLocation();
  const classes = useStyles();
  const [user, setUser] = useContext(userContext);
  console.log(user);
  console.log(location.pathname);

  useEffect(() => {});

  return (
    <>
      <div className={styles.signin}>
        <div className={styles.signin_form}>
          <div className={cx(styles.booking_form, "d-flex")}>
            <form
              onSubmit={handleSubmit}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <div>
                <h1>Login</h1>
              </div>
              <FormHelperText focused="true" error="true">
                {user.error && user.error.message}
              </FormHelperText>
              <TextField
                // variant="outlined"
                error={user.error.email ? true : false}
                id="standard-full-width"
                label="Email"
                className={styles.textfield}
                name="email"
                value={user.email}
                onChange={handleChange}
                // input:classes.input
                // classes={{
                //   input: classes.input,
                // }}
                // classes={{root}}
                style={{ marginBottom: 20, marginTop: 20 }}
                // placeholder="Placeholder"
                // helperText="Full width!"
                fullWidth
                margin="normal"
                helperText={user.error.email}

                // defaultValue={`dhaka`}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />

              <TextField
                error={user.error.password ? true : false}
                id="standard-full-width"
                name="password"
                value={user.password}
                onChange={handleChange}
                label="Password"
                // variant="outlined"
                type="password"
                style={{ margin: 8 }}
                fullWidth
                minLength="8"
                helperText={user.error.password}
                // defaultValue={selectedPlace && `${selectedPlace.placeName}`}
                // value={selectedPlace && `${selectedPlace.placeName}`}
                // readOnly={false}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
              <div className="d-flex justify-content-between mt-4">
                <div>
                  <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    style={{ marginLeft: "-10px" }}
                  />
                  Remember me
                </div>
                <div className="mt-3">
                  <Link>Forget Password</Link>
                </div>
              </div>
              <Button type="submit" variant="contained" fullWidth>
                Signin
              </Button>
              <div className="text-center mt-4">
                Don't have an account?
                <Link to="/signup">Create an account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    // console.log(e.target.name);
    let newUser = { ...user };
    if (newUser.email === "") {
      newUser.error.email = "Email is required";
    } else delete newUser.error.email;

    if (newUser.password === "") {
      newUser.error.password = "Password is required";
    } else delete newUser.error.password;
    setUser(newUser);
    let errors = Object.keys(user.error).length > 0;
    if (!errors) {
      try {
        let response = await firebase.signinWithEmailPassword(
          user.email,
          user.password
        );
        console.log("response");
        console.log(response);
      } catch (e) {
        console.log(e.message);
        const newUser = { ...user };
        newUser.error.message = e.message;
        setUser(newUser);
      }
    }

    // console.log("submit response");
    // console.log(response);
  }

  function handleChange({ target: { name, value } }) {
    console.log(name);
    let newUser = { ...user };
    newUser[name] = value.trim();

    if (name === "email") {
      if (value.trim() === "") {
        newUser.error.email = "email is required";
      } else {
        newUser.error.email = "";
      }
    }

    if (name === "password") {
      if (value.trim() === "") {
        newUser.error.password = "password is required";
      } else {
        newUser.error.password = "";
      }
    }

    setUser(newUser);
  }
};

export default SignIn;
