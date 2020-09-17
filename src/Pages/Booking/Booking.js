import React, { useState, useEffect } from "react";
import styles from "./Booking.module.scss";
import cx from "classname";
import LocationCard from "../../Components/Location_Card/LocationCard";
import { useParams } from "react-router-dom";
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

const Bookingpage = ({ places }) => {
  // let selectedItem;
  const { placeId } = useParams();
  const [selectedPlace, setSelectedPlace] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const place = places.find((place) => place.id === placeId);
    setSelectedPlace(place);
  }, [places]);
  console.log("place");
  console.log(selectedPlace);

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
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
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
                    defaultValue={`dhaka`}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-full-width"
                    label="Outlined"
                    variant="outlined"
                    style={{ margin: 8 }}
                    fullWidth
                    // defaultValue={selectedPlace && `${selectedPlace.placeName}`}
                    value={selectedPlace && `${selectedPlace.placeName}`}
                    // readOnly={false}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid justify="space-between">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="From"
                        className={classes.datepicker}
                        // value={selectedDate}
                        // onChange={handleDateChange}
                        style={{ paddingRight: 4 }}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="To"
                        className={classes.datepicker}
                        // value={selectedDate}
                        // onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <Button variant="contained" fullWidth>
                    Booking
                  </Button>
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
};

export default Bookingpage;
