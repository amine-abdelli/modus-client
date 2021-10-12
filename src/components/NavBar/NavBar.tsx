import { useHistory } from 'react-router';
import { Typography } from 'antd';

import './NavBar.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTh, faHome, faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { LogoutButton } from '../Authentication/LogoutButton';
import { Section } from './Section';
import { Routes } from '../Routes/Routes.enum';

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
          component={<FontAwesomeIcon color="#264653" icon={faHome} size="lg" mask={['far', 'circle']} />}
          path={Routes.HOME}
        />
        <Section
          component={<FontAwesomeIcon color="#264653" icon={faTh} size="lg" />}
          path={Routes.TRACKERS}
        />
        <Section
          component={<FontAwesomeIcon color="#264653" icon={faPaperPlane} size="lg" />}
          path={Routes.DAILY}
        />
        <LogoutButton />
      </div>
    </>
  );
};
