import React from "react";
import { TabContext } from "@material-ui/lab";
import { TabPanel } from "@material-ui/lab";
import { connect } from "react-redux";
import Nav from "./Nav";
export const Home = (props) => {
  console.log(props.status);

  return (
    <>
      <TabContext>
        <div>
          <Nav />
        </div>

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
};

const mapStateToProps = (state) => ({
  status: state.status,
});
export default connect(mapStateToProps)(Home);
