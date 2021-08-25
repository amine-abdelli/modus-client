import { useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useGetUser } from '../api/hooks/useGetUser';
import { AuthenticatedRoutesInterface } from './AuthenticatedRoute';
import { Routes } from './Routes.enum';

export interface UnAuthenticatedRoutesInterface extends RouteProps {
  children: React.ReactElement
}

const UnAuthenticatedRoute = ({ children, ...rest }: AuthenticatedRoutesInterface) => {
  const { isLoggedIn } = useGetUser();
  return (
    <Route {...rest}>
      {isLoggedIn ? <Redirect to={Routes.HOME} /> : (children)}
    </Route>
  );
};

export { UnAuthenticatedRoute };
