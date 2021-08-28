import * as React from 'react';
import {Redirect, Route } from 'react-router-dom';
import { IPrivateRoute } from '../types';


const PrivateRoute = ({component, isAuthenticated, ...rest}: IPrivateRoute) => {
  const routeComponent = (props: any) => (
      isAuthenticated
          ? React.createElement(component, props)
          : <Redirect to={{pathname: '/'}}/>
  );
  return <Route {...rest} render={routeComponent}/>;
};

export default PrivateRoute;
