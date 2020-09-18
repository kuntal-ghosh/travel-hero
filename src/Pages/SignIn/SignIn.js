import React, { useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import navbarColorContext from "../../Context/NavbarColorContext";
import styles from "./Signin.module.scss";
import { Link, useLocation } from "react-router-dom";
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

const SignIn = () => {
  //   const [navbarColor, setNavbarColor] = useContext(navbarColorContext);
  //   let newColor = { ...navbarColor };
  //   setNavbarColor(newColor);
  const location = useLocation();
  const classes = useStyles();
  console.log(location.pathname);

  return (
    <>
      <div className={styles.signin}>
        <div className={styles.signin_form}>
          <div className={cx(styles.booking_form, "d-flex")}>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <h1>Login</h1>
              </div>
              <TextField
                // variant="outlined"
                id="standard-full-width"
                label="Email"
                className={styles.textfield}
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
              <Button variant="contained" fullWidth>
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
};

export default SignIn;
