import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Home, Login } from '../components';
import { AuthenticatedRoutes, UnAuthenticatedRoutes, Routes as RoutesEnum } from '.';

const Routes = () => (
  <>
    <Router>
      <Switch>
        <AuthenticatedRoutes exact path={RoutesEnum.HOME}>
          <Home />
        </AuthenticatedRoutes>
        <UnAuthenticatedRoutes exact path={RoutesEnum.LOGIN}>
          <Login />
        </UnAuthenticatedRoutes>
      </Switch>
    </Router>
  </>
);

export { Routes };
