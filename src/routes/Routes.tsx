import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ComplaintList from "../pages/Admin/ComplaintList/ComplaintList";
import CreateComplaint from "../pages/CreateComplaint/CreateComplaint";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-complaint">
          <CreateComplaint />
        </Route>
        <PrivateRoute
          path="/admin/complaint-list"
          isAuthenticated={!!isLoggedIn}
          component={ComplaintList}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
