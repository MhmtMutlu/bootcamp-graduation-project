import React from 'react';
import { BrowserRouter as Router, Route, Redirect, useRouteMatch } from "react-router-dom";
import PersonalInfos from './Steps/PersonalInfos';
import ComplaintDetail from './Steps/ComplaintDetail';
import ComplaintTitle from './Steps/ComplaintTitle';
import AdditionalInfos from './Steps/AdditionalInfos';
import Result from './Steps/Result';


function MultiStepForm() {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Redirect from={path} to={`${path}/personal-infos`} />
      <Route path={`${path}/personal-infos`} component={PersonalInfos} />
      <Route path={`${path}/complaint-detail`} component={ComplaintDetail} />
      <Route path={`${path}/complaint-title`}component={ComplaintTitle} />
      <Route path={`${path}/additonal-infos`} component={AdditionalInfos} />
      <Route path={`${path}/result`} component={Result} />
    </Router>
  )
}

export default MultiStepForm;
