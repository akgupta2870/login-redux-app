import "./App.css";
import Home from "./Login/component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Login/component/About";
import Users from "./Login/component/Users";
import Profile from "./Login/component/Profile";
import Login from "./Login/component/Login";
import { connect } from "react-redux";

export function App(props) {
  console.log(props.status);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/profile">
            {props.status ? <Profile /> : <Login />}
          </Route>
          <Route path="/login">{props.status ? <Login /> : <Login />}</Route>
          <Route path="/about">{props.status ? <About /> : <Login />}</Route>
          <Route path="/users">{props.status ? <Users /> : <Login />}</Route>
        </Switch>
      </Router>
    </>
  );
}
export const mapStateToProps = (state) => ({ status: state.status });
export default connect(mapStateToProps, null)(App);
