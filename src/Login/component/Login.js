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
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const onFailure = (res) => {
    console.log(res);
  };
  const onSubmit = () => {
    validate();
  };
  const validate = () => {
    if (Credential.some((item) => item.Username === props.username)) {
      if (Credential.some((item) => item.password === props.password)) {
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
    //props.submitStatus("true");
    props.submitStatus("true");
    history.push("/");
    console.log(res.profileObj);
  };

  return (
    <>
      <div className={classes.usernamediv}>
        <TextField
          className={classes.TextFielddiv}
          label="Username"
          placeholder="Enter UserName"
          value={props.username}
          name="Username"
          onChange={props.submitUsername}
        />
        {usernameError && (
          <FormHelperText className={classes.helpertext}>
            Please Enter valid Username
          </FormHelperText>
        )}

        <TextField
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={props.password}
          onChange={props.submitPassword}
        />
        {passwordError && (
          <FormHelperText className={classes.helpertext}>
            Please Fill Valid Password
          </FormHelperText>
        )}

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

        <GoogleLogin
          clientId="889107126365-46cjn6g2er5tr7964sdannsnnf53l4hg.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSucess}
          onFailure={onFailure}
          CookiePolicy={"single-host-origin"}
          isSignedIn={false}
        />
      </div>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    submitStatus: (status) => dispatch({ type: "STATUS", status: true }),
    submitUsername: (e) =>
      dispatch({ type: "USERNAME", username: e.target.value }),
    submitPassword: (e) =>
      dispatch({ type: "PASSWORD", password: e.target.value }),
  };
};
const mapStateToProps = (state) => ({
  status: state.status,
  username: state.username,
  password: state.password,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Login);
