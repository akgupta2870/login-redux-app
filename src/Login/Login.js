import { TextField, Button } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Credential } from "./Credentials";

const Login = (props) => {
  const onFailure = (res) => {
    console.log(res);
  };
  //const store = createStore(rootReducer);
  console.log(props);
  console.log(props.status);
  console.log(props.fetchusername);
  console.log(props.fetchpassword);
  const [statepassword, setStatepassowrd] = useState("");
  const history = useHistory();
  const [stateuserName, setStateusername] = useState("");
  //const [statestatus, setStatestatus] = useState(false);
  const onSubmit = () => {
    validate();
    console.log("clicked");
  };
  const validate = () => {
    if (Credential.some((item) => item.Username === stateuserName)) {
      //props.submitUsername(stateuserName);
      if (Credential.some((item) => item.password === statepassword)) {
        //setStatestatus(true);
        alert("login sucessfully");
        // props.submitPassword(statepassword);
        props.submitStatus("true");
        return history.push("/");
      } else {
        alert("Enter valid Passowrd");
      }
    } else {
      alert("Enter valid Username");
    }
  };
  //const { store } = useContext(ReactReduxContext),props.submitUsername(),
  const onSucess = (res) => {
    props.submitStatus("true");
    alert("login sucessfully");
    history.push("/");
    console.log(res.profileObj);
  };
  // const [output, dispatch] = useReducer(reducer, istate);
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <div>
          <TextField
            label="Username"
            placeholder="Enter UserName"
            value={props.username}
            name="Username"
            onChange={(e) => {
              setStateusername(e.target.value);
              //props.submitUsername();
              // dispatch({ type: "USERNAME", payload: e.target.value })
            }}
            //onChange={(e) => setState(e.target.value)}
          />
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
              //props.submitPassword();
              // (e) => this.props.submitPassword(e.target.value)
              //    dispatch({ type: "PASSWORD", payload: e.target.value })
            }}
          />
        </div>
        <div>
          <Button
            name="status"
            variant="contained"
            color="primary"
            onClick={() => {
              onSubmit();
              // props.submitStatus();
              // dispatch({ type: "STATUS", payload: (e.target.value = true) }) ,onSubmit() its goes up
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
        <div>
          {props.status && <span>plese login with Username or password </span>}
        </div>
      </div>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    submitUsername: (e) =>
      dispatch({ type: "USERNAME", username: e.target.value }),
    submitPassword: (e) =>
      dispatch({ type: "PASSWORD", password: e.target.value }),
    submitStatus: (status) => dispatch({ type: "STATUS", status: status }),
  };
};
//export default connect(null, mapDispatchtoprops)(Form2);
const mapStateToProps = (state) => ({
  status: state.status,
  // fetchusername: state.Username,
  // fetchpassword: state.password,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Login);
