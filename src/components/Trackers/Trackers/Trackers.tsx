import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './Trackers.less';

const trackers = ['mood'];
const Trackers = () => {
  console.log();
  return (
    <div className="tracker-card--wrapper">
      {trackers.map((track) => (
        <Link key={Date.now()} to={`/${track}`}>
          <Card className="tracker-card">{track}</Card>
        </Link>
      ))}
      <Card className="tracker-card">
        <div><FontAwesomeIcon icon={faPlusCircle} size="2x" /></div>
      </Card>
    </div>
  );
};

export { Trackers };
