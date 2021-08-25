import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { Home, Login } from '../components';
import { PrivateRoute, PublicRoute, Routes as RoutesEnum } from '.';

const Routes = () => (
  <>
    <Router>
      <Switch>
        <PrivateRoute exact path={RoutesEnum.HOME}>
          <Home />
        </PrivateRoute>
        <PublicRoute exact path={RoutesEnum.LOGIN}>
          <Login />
        </PublicRoute>
      </Switch>
    </Router>
  </>
);

export { Routes };
