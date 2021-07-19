import { Tab, AppBar } from "@material-ui/core";
import { TabContext, TabList } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { connect } from "react-redux";
export const Nav = (props) => {
  const history = useHistory();
  console.log(props.status);
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
                }}
              />
              <Tab
                label="HOME"
                onClick={() => {
                  history.push("/");
                }}
              />
              {/* {hide && ( */}
              <Tab
                label="LOGIN"
                disabled={props.status}
                onClick={() => {
                  history.push("/login");
                }}
              />
              {/* )} */}
              {/* {!hide && ( */}
              <Tab
                label="LOGOUT"
                disabled={!props.status}
                onClick={() => {
                  console.log("clicked");
                  props.submitStatus();
                }}
              />
              {/* )} */}
              <Tab
                label="ABOUT"
                onClick={() => {
                  history.push("/about");
                }}
              />
              <Tab
                label="USERS"
                onClick={() => {
                  history.push("/users");
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
