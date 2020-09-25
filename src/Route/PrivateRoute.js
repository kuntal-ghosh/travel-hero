import React from "react";
import { Route, useLocation, Redirect } from "react-router-dom";

function PrivateRoute({ children, user, ...rest }) {
  const location = useLocation();
  //   console.log(...rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
