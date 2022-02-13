import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  // children is the actual elements that is in the private route tag (private route is used as component) (children in this case is the checkout page)
  // ... rest gets all the props, rest can be named anything

  const { user } = useAuth0();

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
