import React, { useState, useEffect, useContext } from "react";
import styles from "./Booking.module.scss";
import cx from "classname";
// import LocationCard from "../../Components/Location_Card/LocationCard";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  TextField,
  // FormControl,
  // InputLabel,
  // OutlinedInput,
  // InputAdornment,
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
import bookingContext from "../../Context/bookingContext";

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
      // width: "60ch",
      display: "block",
    },
    "& .MuiButton-fullWidth": {
      "&:hover": {
        "& .MuiButton-label": {
          textDecoration: "none",
          // color: "red",
        },
        textDecoration: "none",
        listStyle: "none",
        // backgroundColor: "red",
        linkStyle: "none",
        outlined: "none",
      },
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

const Bookingpage = ({ places }) => {
  // let selectedItem;
  const endDate = new Date();
  const { placeId } = useParams();

  const [booked, setBooked] = useContext(bookingContext);

  const [selectedPlace, setSelectedPlace] = useState({});
  const [booking, setBooking] = useState({
    origin: "Dhaka",
    place: "",
    startDate: new Date(),
    endDate: endDate.setDate(endDate.getDate() + 1),
    error: {},
  });
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const place = places.find((place) => place.id === placeId);
    setSelectedPlace(place);
    const newBooking = { ...booking };
    newBooking.place = place && place.placeName;
    setBooking(newBooking);
  }, []);
  // console.log("place");
  // console.log(selectedPlace);
  console.log("booking");
  console.log(booking);

  return (
    <>
      <div className={cx(styles.Bookingpage_header)}>
        <div className={cx("container", styles.Bookingpage_header_container)}>
          <div className="row h-100 text-light">
            <div className="col-5 h-100 position-relative pr-4">
              {selectedPlace && (
                <div className={styles.place_info}>
                  <h1 className="text-123">{selectedPlace.placeName}</h1>
                  <p>{selectedPlace.description}</p>
                </div>
              )}
            </div>
            <div className="col-7 h-100 position-relative">
              <div className={cx(styles.booking_form, "d-flex")}>
                <form
                  onSubmit={handleSubmit}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    required="true"
                    variant="outlined"
                    id="standard-full-width"
                    label="Origin"
                    className={styles.textfield}
                    // input:classes.input
                    // classes={{
                    //   input: classes.input,
                    // }}
                    // classes={{root}}
                    style={{ marginBottom: 60, marginTop: 60 }}
                    // placeholder="Placeholder"
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    // defaultValue={`dhaka`}
                    name="origin"
                    value={booking.origin}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={booking.error && booking.error.origin}
                    helperText={booking.error && booking.error.origin}
                  />
                  <TextField
                    required="true"
                    id="standard-full-width"
                    label="Place"
                    variant="outlined"
                    style={{ margin: 8 }}
                    fullWidth
                    // defaultValue={selectedPlace && `${selectedPlace.placeName}`}
                    name="place"
                    value={booking.place}
                    onChange={handleChange}
                    // readOnly={false}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={booking.error && booking.error.place}
                    helperText={booking.error && booking.error.place}
                  />
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid justify="space-between">
                      <KeyboardDatePicker
                        required
                        // disableToolbar
                        variant="inline"
                        // clearLabel
                        autoOk
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="From"
                        className={classes.datepicker}
                        // value={selectedDate}
                        style={{ paddingRight: 4 }}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        // name="startDate"
                        // value={}
                        value={booking.startDate}
                        onChange={(date) => handleStartDateChange(date)}

                        // minDate=
                      />
                      <KeyboardDatePicker
                        // disableToolbar
                        variant="inline"
                        // clearLabel
                        autoOk
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="To"
                        className={classes.datepicker}
                        // value={selectedDate}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        value={booking.endDate}
                        onChange={(date) => handleEndDateChange(date)}
                        minDate={booking.startDate}
                        required
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  {/* <Link to={!booking.error && `/search/${placeId}`}> */}
                  <Button
                    variant="contained"
                    fullWidth
                    style={{ textDecoration: "none" }}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Booking
                  </Button>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function onCardClick(id) {
    console.log("clickd");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBooking = { ...booking };
    let errors = Object.keys(booking.error).length > 0;  
    if(!errors){
      setBooking(newBooking);
      setBooked(newBooking);
      history.push(`/search/${placeId}`);
    }  
 
  }
  function handleChange(e) {
    const newBooking = { ...booking };
    if (e.target.value === "") {
      newBooking.error[e.target.name] = `${e.target.name} is required`;
    } else {
      delete newBooking.error[e.target.name];
    }
    newBooking[e.target.name] = e.target.value;
    setBooking(newBooking);
  }
  function handleStartDateChange(date) {
    const newBooking = { ...booking };
    newBooking.startDate = date;
    setBooking(newBooking);
  }
  function handleEndDateChange(date) {
    const newBooking = { ...booking };
    newBooking.endDate = date;
    setBooking(newBooking);
  }
};

export default Bookingpage;
