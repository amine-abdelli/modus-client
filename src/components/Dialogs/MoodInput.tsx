import { Button } from 'antd';
import { Mood } from './Mood.enum';

const MoodInput = ({ onMoodRateSelect }: any) => {
  const moodArray = Object.values(Mood).slice(0, 5).map((moomood, i) => {
    console.log();
    return (
      <Button
        key={moomood}
        onClick={() => onMoodRateSelect(i + 1)}
      >
        <img className="mood-logo" src={`${moomood}`} alt="Logo" />
      </Button>
    );
  });
  return (
    <>
      {moodArray}
    </>
  );
};

export { MoodInput };
