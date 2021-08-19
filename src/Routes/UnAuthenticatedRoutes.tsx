import { useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthenticatedRoutesInterface } from './AuthenticatedRoutes';
import { Routes } from './Routes.enum';

export interface UnAuthenticatedRoutesInterface extends RouteProps {
  children: React.ReactElement
}

const UnAuthenticatedRoutes = ({ children, ...rest }: AuthenticatedRoutesInterface) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Route {...rest}>
      {isLoggedIn ? <Redirect to={Routes.HOME} /> : (children)}
    </Route>
  );
};

export { UnAuthenticatedRoutes };
