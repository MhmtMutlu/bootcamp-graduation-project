import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ComplaintDetails from "../pages/Admin/ComplaintDetails/ComplaintDetails";
import ComplaintList from "../pages/Admin/ComplaintList/ComplaintList";
import ComplaintQuery from "../pages/ComplaintQuery/ComplaintQuery";
import CreateComplaint from "../pages/CreateComplaint/CreateComplaint";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-complaint" component={CreateComplaint} />
        <Route path="/complaint-query/:id" component={ComplaintQuery} />
        <PrivateRoute
          exact
          path="/admin/complaint-list"
          isAuthenticated={!!isLoggedIn}
          component={ComplaintList}
        />
        <PrivateRoute
          exact
          path="/admin/complaint-details/:id"
          isAuthenticated={!!isLoggedIn}
          component={ComplaintDetails}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
