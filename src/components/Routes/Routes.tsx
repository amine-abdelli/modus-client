import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import {
  Home, Login, MoodTracker, Signup,
} from '..';
import { PrivateRoute, PublicRoute, Routes as RoutesEnum } from '.';
import { Trackers } from '../Trackers/Trackers';
import { Daily } from '../Daily/Daily';

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
      <PrivateRoute path={RoutesEnum.DAILY}>
        <Daily />
      </PrivateRoute>
      <PrivateRoute path={RoutesEnum.HOME}>
        <Home />
      </PrivateRoute>
    </Switch>
  </>
);

export { Routes };
