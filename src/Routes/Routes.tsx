import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import {
  Home, Login, MoodTracker, Signup,
} from '../components';
import { PrivateRoute, PublicRoute, Routes as RoutesEnum } from '.';
import { Trackers } from '../components/Trackers/Trackers/Trackers';

const Routes = () => (
  <>
    <Switch>
      <PublicRoute exact path={RoutesEnum.LOGIN}>
        <Login />
      </PublicRoute>
      <PublicRoute exact path={RoutesEnum.SIGNUP}>
        <Signup />
      </PublicRoute>
      <PrivateRoute path={RoutesEnum.TRACKERS}>
        <Trackers />
      </PrivateRoute>
      <PrivateRoute path={RoutesEnum.MOOD}>
        <MoodTracker />
      </PrivateRoute>
      <PrivateRoute path={RoutesEnum.HOME}>
        <Home />
      </PrivateRoute>
    </Switch>
  </>
);

export { Routes };
