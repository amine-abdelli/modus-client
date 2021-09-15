import { IconGenerator } from '../IconsGen/IconsGenerator';
import './CustomTooltip.less';

const CustomTooltip = ({ phrase, moodValue, date }: any): any => {
  console.log();
  return (
    <>
      <div
        className="tooltip-card tooltip-card-left"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <p>{date}</p>
        <p>{IconGenerator(moodValue)}</p>
        <p>{phrase}</p>
      </div>
    </>
  );
};

export { CustomTooltip };
