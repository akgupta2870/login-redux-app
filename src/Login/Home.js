import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
//import TabPanel from "@material-ui/lab/TabPanel";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { TabPanel } from "@material-ui/lab";
import { connect } from "react-redux";
export function Home(props) {
  const history = useHistory();
  //const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    console.log(props.status);
    switch (newValue) {
      case "1": {
        return <Link to="/">Home</Link>;
      }
      case "2": {
        return history.push("/login");
      }
      case "3": {
        return history.push("/profile");
      }
      case "4": {
        return history.push("/about");
      }
      case "5": {
        return history.push("/users");
      }
      case "6": {
        alert("Logout Sucessfully");
        return props.submitStatus("false");
      }
      case "7": {
        return history.push("/signup");
      }
      default: {
        return history.push("/");
      }
    }
  };

  return (
    <>
      <TabContext>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab icon={<PersonPinIcon />} label="Profile" value="3" />
            <Tab label="HOME" value="1" />
            <Tab label="LOGIN" value="2" />
            <Tab label="LOGOUT" value="6" />
            <Tab label="ABOUT" value="4" />
            <Tab label="USER" value="5" />
            <Tab label="SIGNUP" value="7" />
          </TabList>
        </AppBar>
        <TabPanel>
          <h1>Welcome to HOME PAGE</h1>
          <p>
            In the history of Europe, the Middle Ages or medieval period lasted
            approximately from the 5th to the late 15th centuries. It began with
            the fall of the Western Roman Empire and transitioned into the
            Renaissance and the Age of Discovery. The Middle Ages is the middle
            period of the three traditional divisions of Western history:
            classical antiquity, the medieval period, and the modern period. The
            medieval period is itself subdivided into the Early, High, and Late
            Middle Ages.
          </p>
        </TabPanel>
      </TabContext>
    </>
  );
}

const mapDispatchtoprops = (dispatch) => {
  return {
    submitStatus: (status) => dispatch({ type: "STATUS", status: status }),
  };
};
const mapStateToProps = (state) => ({
  status: state.status,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Home);
