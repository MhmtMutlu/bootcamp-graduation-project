import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComplaintList from "../pages/Admin/ComplaintList/ComplaintList";
import CreateComplaint from "../pages/CreateComplaint/CreateComplaint";
import Home from "../pages/Home/Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-complaint">
          <CreateComplaint />
        </Route>
        <Route exact path="/admin/complaint-list">
          <ComplaintList />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
