import { useHistory } from 'react-router';
import { Typography } from 'antd';

import './NavBar.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { LogoutButton } from '../Authentication';
import { Section } from './Section';
import { Routes } from '../../Routes';

export const NavBar = () => {
  const history = useHistory();
  const { Title } = Typography;
  return (
    <>
      <div
        className="navbar"
      >
        <Title className="navbar--brand" onClick={() => history.push(Routes.HOME)} level={5}>MODUS</Title>
        <Section
          component={<FontAwesomeIcon icon={faTh} size="lg" />}
          path={Routes.TRACKERS}
        />
        <LogoutButton />
      </div>
    </>
  );
};
