import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useLazyQuery } from '@apollo/client';
import { LOGOUT_QUERY } from '../../api/requests/queries';
import { Routes } from '../Routes';

const LogoutButton = () => {
  const [logOutUser] = useLazyQuery(LOGOUT_QUERY, {
    onCompleted: () => window.location.replace(Routes.LOGIN),
    onError: () => window.location.replace(Routes.LOGIN),
  });
  function logoutUser() {
    logOutUser();
  }

  return (
    <Button className="logout--button" onClick={logoutUser} icon={<LogoutOutlined />} />
  );
};

export { LogoutButton };
