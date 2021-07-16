import "./App.css";
//import { Login } from "./Login/login";
import Home from "./Login/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Login/About";
import Users from "./Login/Users";
import Profile from "./Login/Profile";
import Login from "./Login/Login";
import { connect } from "react-redux";
import { Signup } from "./Login/Signup";
//import { PrivateRoute } from "./Login/PrivateRoute";
export function App(props) {
  return (
    //<Signup />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <PrivateRoute path="/hidden" component={hidden} /> */}
        <Route path="/profile">{props.status ? <Profile /> : <Login />}</Route>
        <Route path="/login">{props.status ? <Login /> : <Login />}</Route>
        <Route path="/about">{props.status ? <About /> : <Login />}</Route>
        <Route path="/users">{props.status ? <Users /> : <Login />}</Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}
export const mapStateToProps = (state) => ({ status: state.status });
export default connect(mapStateToProps, null)(App);
