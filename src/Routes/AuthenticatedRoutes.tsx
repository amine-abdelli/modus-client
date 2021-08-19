import React, { useState } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Login } from '../components';

export interface AuthenticatedRoutesInterface extends RouteProps {
  children: React.ReactElement
}

const AuthenticatedRoutes = ({ children, ...rest }: AuthenticatedRoutesInterface) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Route {...rest}>
      { isLoggedIn ? (children) : <Login /> }
    </Route>
  );
};

export { AuthenticatedRoutes };
