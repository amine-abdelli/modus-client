import { Card } from 'antd';
import { IconGenerator } from '../IconsGen/IconsGenerator';
import './CustomTooltip.less';

const CustomTooltip = ({ phrase, moodValue }: any): any => {
  console.log();
  return (
    <>
      <div
        className="tooltip-card tooltip-card-left"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <p>{IconGenerator(moodValue)}</p>
        <p>{phrase}</p>
      </div>
    </>
  );
};

export { CustomTooltip };
