import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import PersonalInfos from './Steps/PersonalInfos';
import ComplaintDetail from './Steps/ComplaintDetail';
import ComplaintTitle from './Steps/ComplaintTitle';
import AdditionalInfos from './Steps/AdditionalInfos';
import Result from './Steps/Result';


function MultiStepForm() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/personal-infos`}/>
      </Route>
      <Route path={`${path}/personal-infos`} component={PersonalInfos} />
      <Route path={`${path}/complaint-detail`} component={ComplaintDetail} />
      <Route path={`${path}/complaint-title`}component={ComplaintTitle} />
      <Route path={`${path}/additonal-infos`} component={AdditionalInfos} />
      <Route path={`${path}/result`} component={Result} />
    </Switch>
  )
}

export default MultiStepForm;
