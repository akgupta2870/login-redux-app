import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }, props) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        props.status ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};
export const mapStateToProps = (state) => ({ status: state.status });
export default connect(mapStateToProps, null)(PrivateRoute);
