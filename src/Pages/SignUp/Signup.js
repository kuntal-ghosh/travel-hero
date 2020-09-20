import React, { useContext, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import navbarColorContext from "../../Context/NavbarColorContext";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import cx from "classname";
import SocialLoginButton from "../../Components/Social_Login_Button/Social_Login_Button";
import * as firebase from "../../services/firebase.auth";
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
  },
  input: {
    minHeight: "100px",
  },
  datepicker: {
    // padding: theme.spacing(2),
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: {},
  });

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
                <h1>Create an account</h1>
              </div>
              <TextField
                // variant="outlined"
                id="standard-full-width"
                label="First Name"
                className={styles.textfield}
                error={user.error.firstName ? true : false}
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                helperText={user.error.firstName}
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
                // defaultValue={`dhaka`}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
              <TextField
                // variant="outlined"
                id="standard-full-width"
                label="Last Name"
                className={styles.textfield}
                error={user.error.lastName ? true : false}
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                helperText={user.error.lastName}
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
                // defaultValue={`dhaka`}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
              <TextField
                // variant="outlined"
                id="standard-full-width"
                label="Username or Email"
                className={styles.textfield}
                error={user.error.email ? true : false}
                name="email"
                value={user.email}
                onChange={handleChange}
                helperText={user.error.email}
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
                // defaultValue={`dhaka`}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
              <TextField
                id="standard-full-width"
                label="Password"
                // variant="outlined"
                type="password"
                style={{ margin: 8 }}
                fullWidth
                error={user.error.password ? true : false}
                name="password"
                value={user.password}
                onChange={handleChange}
                helperText={user.error.password}
                // defaultValue={selectedPlace && `${selectedPlace.placeName}`}
                // value={selectedPlace && `${selectedPlace.placeName}`}
                // readOnly={false}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
              <TextField
                id="standard-full-width"
                label="Confirm Password"
                // variant="outlined"
                type="password"
                style={{ margin: 8 }}
                fullWidth
                error={user.error.confirmPassword ? true : false}
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                helperText={user.error.confirmPassword}
                // defaultValue={selectedPlace && `${selectedPlace.placeName}`}
                // value={selectedPlace && `${selectedPlace.placeName}`}
                // readOnly={false}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />

              <Button variant="contained" type="submit" fullWidth>
                Create an account
              </Button>
              <div className="text-center mt-4">
                Already have an account?
                <Link to="/signup">Login</Link>
              </div>
              <span className="mt-3">
                <hr />
              </span>

              <div onClick={facebookSignIN}>
                <SocialLoginButton
                  imageUrl="/images/fb.png"
                  buttonText="Continue with Facebook account"
                ></SocialLoginButton>
              </div>
              <div onClick={googleSignIN}>
                <SocialLoginButton
                  imageUrl="/images/google.png"
                  buttonText="Continue with Google account"
                ></SocialLoginButton>
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
      newUser.error.firstName = "Firstname is required";
    } else delete newUser.error.firstName;

    if (newUser.lastName === "") {
      newUser.error.lastName = "Lastname is required";
    } else delete newUser.error.lastName;

    if (newUser.email === "") {
      newUser.error.email = "Email is required";
    } else delete newUser.error.email;

    if (newUser.password === "") {
      newUser.error.password = "Password is required";
    } else delete newUser.error.password;

    if (newUser.confirmPassword === "") {
      newUser.error.confirmPassword = "Confirm Password is required";
    } else delete newUser.error.confirmPassword;
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

  function facebookSignIN() {}

  async function googleSignIN() {
    console.log("google clicked");
    let newUser = { ...user };

    try {
      const { user } = await firebase.signupwithEmailPassword();
      console.log(user);
      newUser.email = user.email;
      newUser.password = user.password;
      setUser(newUser);
    } catch (e) {
      console.log(e.message);
    }
  }
};

export default Signup;
