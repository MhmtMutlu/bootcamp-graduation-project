import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PersonalInfos from './Steps/PersonalInfos';
import ComplaintDetail from './Steps/ComplaintDetail';
import ComplaintTitle from './Steps/ComplaintTitle';
import AdditionalInfos from './Steps/AdditionalInfos';
import Result from './Steps/Result';


function MultiStepForm() {
  return (
    <Router>
      <Redirect from="/create-complaint/" to="/personal-infos" />
      <Route path="/personal-infos" component={PersonalInfos} />
      <Route path="/complaint-detail" component={ComplaintDetail} />
      <Route path="/complaint-title" component={ComplaintTitle} />
      <Route path="/additonal-infos" component={AdditionalInfos} />
      <Route path="/result" component={Result} />
    </Router>
  )
}

export default MultiStepForm;
