import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ComplaintContextProvider from './context/ComplaintContext';
import CreateComplaint from './pages/CreateComplaint/CreateComplaint';
import Home from './pages/Home/Home';

function App() {
  return (
    <ComplaintContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-complaint">
            <CreateComplaint />
          </Route>
        </Switch>
      </Router>
    </ComplaintContextProvider>
  );
}

export default App;
