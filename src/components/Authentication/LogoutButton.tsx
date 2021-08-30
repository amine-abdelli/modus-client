import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router';
import { LOGOUT_QUERY } from '../../api/requests/queries';
import { Routes } from '../../Routes';

const LogoutButton = () => {
  const history = useHistory();
  const [logOutUser] = useLazyQuery(LOGOUT_QUERY, {
    onCompleted: () => history.push(Routes.LOGIN),
    onError: () => history.push(Routes.LOGIN),
  });
  function logoutUser() {
    logOutUser();
  }
  return (
    <Button className="logout--button" onClick={logoutUser} icon={<LogoutOutlined />} />
  );
};

export { LogoutButton };
