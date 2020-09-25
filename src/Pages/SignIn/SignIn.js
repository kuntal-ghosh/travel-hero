import React, { useContext, useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
// import navbarColorContext from "../../Context/NavbarColorContext";
import styles from "./Signin.module.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
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
import DeleteIcon from "@material-ui/icons/Delete";
import SocialLoginButton from "../../Components/Social_Login_Button/Social_Login_Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // height: "100%",
    // padding: "20px",
    // display: "flex",
    // flexWrap: "wrap",

    // justifyContent: "center",
    // textAlign: "center",
    margin: "10px auto",
    "& > *": {
      //   textAlign: "center",
      // margin: "0 auto",

      margin: theme.spacing(1),
      width: "60ch",
      display: "block",
    },
    "& .MuiButton-fullWidth": {
      marginTop: "20px",
      width: "95% !important",
      paddingTop: "12px",
      backgroundColor: "rgba(249,165,26,1)",
    },
    "& .MuiFormHelperText-root": {
      // textAlign: "center",
      // width: "100%",
    },
  },
  button: {
    position: "relative",
    width: "100%",
    height: "4rem",
    border: "1px solid black",
    borderRadius: "2rem",
    margin: "auto",
  },
  button_text: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  button_icon: {
    width: "4rem",
    height: "4rem",
    padding: ".5rem",
    zIndex: "200",
    position: "absolute",
    margin: "0",
    top: "50%",
    left: ".2rem",
    transform: "translate(0%, -50%)",
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
  const history = useHistory();
  const [loggedInUser, setloggedInUser] = useContext(userContext);
  const [user, setUser] = useState({ email: "", password: "", error: {} });
  let { from } = location.state || { from: { pathname: "/" } };
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
                style={{ marginBottom: 10, marginTop: 10 }}
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
                // style={{ margin: 8 }}
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
              <div>
                {/* <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button> */}
                <span className="mt-3">
                  <hr />
                </span>
              </div>
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

  function authenticate() {
    if (loggedInUser.email) {
      history.replace(from);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    // console.log(e.target.name);
    let newUser = { ...user };
    delete newUser.error.message;

    if (newUser.email === "") {
      newUser.error.email = "Email is required";
    } else delete newUser.error.email;

    if (newUser.password === "") {
      newUser.error.password = "Password is required";
    } else delete newUser.error.password;
    let errors = Object.keys(user.error).length > 0;
    if (!errors) {
      try {
        let { user: loggedUser } = await firebase.signinWithEmailPassword(
          user.email,
          user.password
        );
        if (loggedUser.email) {
          newUser.email = loggedUser.email;
          console.log("response");
          console.log(user);
          delete newUser.error.message;
          setloggedInUser(loggedUser);
          setUser(newUser);
          history.push(from.pathname);
        }
      } catch (e) {
        console.log(e.message);
        // const newUser = { ...user };
        newUser.error.message = e.message;
        setUser(newUser);
      }
    }
    // authenticate();

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

  async function facebookSignIN() {
    console.log("facebook clicked");
    let newUser = { ...user };

    try {
      const user = await firebase.signinWithFacebook();
      console.log("facebook response");
      console.log(user);
      if (user) {
        newUser.email = user.email || "facebook@gmail.com";
        newUser.displayName = user.displayName;
        newUser.photoURL = user.photoURL;
        delete newUser.error.message;

        setloggedInUser(newUser);

        setUser(newUser);
        // authenticate();
        history.push(from);
      }
    } catch (e) {
      console.log(e.message);
      newUser.error.message = e.message;
      setUser(newUser);
    }
  }

  async function googleSignIN() {
    console.log("google clicked");
    let newUser = { ...user };

    try {
      const { user } = await firebase.signinWithGoogle();
      console.log(user);
      if (user.email) {
        newUser.email = user.email;
        delete newUser.error.message;

        // newUser.password = user.password;
        setloggedInUser(user);

        setUser(newUser);
        // authenticate();
        history.push(from);
      }
    } catch (e) {
      console.log(e.message);
      newUser.error.message = e.message;
      setUser(newUser);
    }
  }
};

export default SignIn;
