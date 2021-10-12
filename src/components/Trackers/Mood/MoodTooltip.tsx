import { IconGenerator } from '../../utils/IconsGen/IconsGenerator';

const MoodCard = ({ hoveredMood }: any) => {
  const { day, value, phrase } = hoveredMood;
  return (
    <div>
      <h1>{day}</h1>
      <h1>{IconGenerator(value)}</h1>
      <h1>{phrase}</h1>
    </div>
  );
};

export default MoodCard;
