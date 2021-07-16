//import Home from "./Login/Home";
import { Route, Redirect } from "react-router-dom";
//import About from "./Login/About";
//import Users from "./Login/Users";
//import Profile from "./Login/Profile";
//import Login from "./Login/Login";
import { connect } from "react-redux";

export function PrivateRoute({ component: Component, ...rest }, props) {
  return (
    <Route
      {...rest}
      render={(props) =>
        props.status ? <Component /> : <Redirect to="/login" />
      }
    />
  );
}
export const mapStateToProps = (state) => ({ status: state.status });
export default connect(mapStateToProps, null)(PrivateRoute);
