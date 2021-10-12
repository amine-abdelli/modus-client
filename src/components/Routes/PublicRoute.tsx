import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useGetUser } from '../../api/hooks/useGetUser';
import { AuthenticatedRoutesInterface } from './PrivateRoute';
import { Routes } from './Routes.enum';

export interface UnAuthenticatedRoutesInterface extends RouteProps {
  children: React.ReactElement
}

const PublicRoute = ({ children, ...rest }: AuthenticatedRoutesInterface) => {
  const { isLoggedIn, loading } = useGetUser();
  if (loading) { return (<>Loading...</>); }
  return (
    <Route {...rest}>
      {isLoggedIn ? <Redirect to={Routes.HOME} /> : (children)}
    </Route>
  );
};

export { PublicRoute };
