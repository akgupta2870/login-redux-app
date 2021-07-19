import { TextField, Button, FormHelperText } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Credential } from "../functionality/Credentials";
import { useStyles } from "../style/Style";
const Login = (props) => {
  const classes = useStyles;
  const history = useHistory();
  const [statepassword, setStatepassowrd] = useState("");
  const [stateuserName, setStateusername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const onFailure = (res) => {
    //alert("please login again ");
    console.log(res);
  };
  const onSubmit = () => {
    validate();
  };
  const validate = () => {
    if (
      Credential.some(
        (item) => item.Username === stateuserName || stateuserName === ""
      )
    ) {
      if (
        Credential.some(
          (item) => item.password === statepassword || !statepassword === ""
        )
      ) {
        //alert("login sucessfully");
        props.submitStatus();
        return history.push("/");
      } else {
        setPasswordError(true);
      }
    } else {
      setUsernameError(true);
    }
  };

  const onSucess = (res) => {
    props.submitStatus("true");
    //alert("login sucessfully");
    props.submitStatus("true");
    history.push("/");
    console.log(res.profileObj);
  };

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <div>
          <TextField
            label="Username"
            placeholder="Enter UserName"
            value={props.username}
            name="Username"
            // {...register("username", { required: true })}
            onChange={(e) => {
              setStateusername(e.target.value);
            }}
          />
          {usernameError && (
            <FormHelperText className={classes.helpertext}>
              please fill it correct
            </FormHelperText>
          )}
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={props.password}
            onChange={(e) => {
              setStatepassowrd(e.target.value);
            }}
          />
          {passwordError && (
            <FormHelperText className={classes.helpertext}>
              please fill it correct
            </FormHelperText>
          )}
        </div>
        <div>
          <Button
            name="status"
            variant="contained"
            color="primary"
            onClick={() => {
              onSubmit();
            }}
          >
            Login
          </Button>
          <div>
            <GoogleLogin
              clientId="889107126365-46cjn6g2er5tr7964sdannsnnf53l4hg.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={onSucess}
              onFailure={onFailure}
              CookiePolicy={"single-host-origin"}
              isSignedIn={false}
            />
          </div>
        </div>
        {/* <div>
          {props.status && <span>plese login with Username or password </span>}
        </div> */}
      </div>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    submitStatus: (status) => dispatch({ type: "STATUS", status: true }),
  };
};
const mapStateToProps = (state) => ({
  status: state.status,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Login);
