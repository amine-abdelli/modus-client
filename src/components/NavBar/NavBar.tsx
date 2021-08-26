import { Typography } from 'antd';
import './NavBar.less';
import { LogoutButton } from '../Authentication';

export const NavBar = () => {
  const { Title } = Typography;
  return (
    <div className="navbar">
      <div className="navbar-layout">
        <Title level={3}>MODUS</Title>
        <LogoutButton />
      </div>
    </div>
  );
};
