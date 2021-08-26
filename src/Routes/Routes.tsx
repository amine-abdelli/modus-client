import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import { Home, Login, Signup } from '../components';
import { PrivateRoute, PublicRoute, Routes as RoutesEnum } from '.';

const Routes = () => (
  <>
    <Switch>
      <PublicRoute exact path={RoutesEnum.LOGIN}>
        <Login />
      </PublicRoute>
      <PublicRoute exact path={RoutesEnum.SIGNUP}>
        <Signup />
      </PublicRoute>
      <PrivateRoute path={RoutesEnum.HOME}>
        <Home />
      </PrivateRoute>
    </Switch>
  </>
);

export { Routes };
