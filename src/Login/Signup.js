import { TextField } from "@material-ui/core";
import { city } from "./Credentials";
import { useState } from "react";
import {
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  root: {
    minWidth: 250,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  container: {
    minWidth: 250,
  },
}));
export const Signup = (props) => {
  const classes = useStyles();
  const [signupstate, setSignupstate] = useState(false);
  return (
    <>
      <div>
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField label="STUDENT NAME" onChange={props.signupName} />
          </form>
        </div>
        <div>
          <form className={classes.container} noValidate>
            {/* <label>D.O.B</label> */}
            <TextField
              type="date"
              className={classes.textField}
              onChange={props.signupDOB}
            />
          </form>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel>CITY</InputLabel>
            <Select value={props.fetchCity} onChange={props.signupCity}>
              {city.map((item) => (
                <MenuItem>{item.city}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log(
                "clicked" + props.fetchName + props.fetchCity + props.fetchDOB
              );
              setSignupstate(true);
              alert("signup sucessfully");
            }}
          >
            SIGNUP
          </Button>
        </div>{" "}
        {signupstate && (
          <div>
            {props.fetchName}+{props.fetchCity}+{props.fetchDOB}
          </div>
        )}
      </div>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    signupName: (e) => dispatch({ type: "NAME", name: e.target.value }),
    signupDOB: (e) => dispatch({ type: "DOB", DOB: e.target.value }),
    signupCity: (e) => dispatch({ type: "CITY", city: e.target.value }),
  };
};
const mapStateToProps = (state) => ({
  fetchName: state.name,
  fetchDOB: state.DOB,
  fetchCity: state.city,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Signup);
