import { Tab, AppBar } from "@material-ui/core";
import { TabContext, TabList } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { connect } from "react-redux";
//import { Redirect } from "react-router";
export const Nav = (props) => {
  const history = useHistory();

  return (
    <>
      <div>
        <TabContext>
          <AppBar position="static">
            <TabList aria-label="simple tabs example">
              <Tab
                icon={<PersonPinIcon />}
                label="Profile"
                onClick={() => {
                  console.log("profilestart");
                  return history.push("/profile");
                  //<Redirect to="/profile" />;
                }}
              />
              <Tab
                label="HOME"
                onClick={() => {
                  history.push("/");
                }}
              />
              <Tab
                label="LOGIN"
                disabled={props.status}
                onClick={() => {
                  history.push("/login");
                  //<Redirect to="/login" />;
                }}
              />
              <Tab
                label="LOGOUT"
                disabled={!props.status}
                onClick={() => {
                  console.log("clicked");
                  props.submitStatus();
                }}
              />
              <Tab
                label="ABOUT"
                onClick={() => {
                  history.push("/about");
                  //<Redirect to="/about" />;
                }}
              />
              <Tab
                label="USERS"
                onClick={() => {
                  history.push("/users");
                  //<Redirect to="/about" />;
                }}
              />
            </TabList>
          </AppBar>
        </TabContext>
      </div>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    submitStatus: (status) => dispatch({ type: "STATUS", status: false }),
  };
};
const mapStateToProps = (state) => ({
  status: state.status,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Nav);
