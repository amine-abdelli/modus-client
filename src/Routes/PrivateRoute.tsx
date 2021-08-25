import React, { useState } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useGetUser } from '../api/hooks/useGetUser';
import { Login } from '../components';

export interface AuthenticatedRoutesInterface extends RouteProps {
  children: React.ReactElement
}

const PrivateRoute = ({ children, ...rest }: AuthenticatedRoutesInterface) => {
  const { isLoggedIn } = useGetUser();
  return (
    <Route {...rest}>
      { isLoggedIn ? (children) : <Login /> }
    </Route>
  );
};

export { PrivateRoute };
