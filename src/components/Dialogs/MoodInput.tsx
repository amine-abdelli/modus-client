import { Button } from 'antd';
import { useState } from 'react';
import { Mood } from './Mood.enum';
import {
  IconGenerator,
} from './IconsGenerator';
import './Icon.less';

const MoodInput = ({ onMoodRateSelect }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const moodArray = Object.values(Mood).slice(0, 5).map((mood, i) => {
    const isNotSelected = activeIndex !== null && activeIndex !== i;
    return (
      <>
        <Button
          key={mood}
          disabled={!!isNotSelected}
          onClick={() => {
            onMoodRateSelect(i + 1);
            setActiveIndex(i);
          }}
          type="link"
        >
          {IconGenerator(`${mood}`, (isNotSelected ? 'selectable' : ''))}
        </Button>
      </>
    );
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {moodArray}
    </div>
  );
};

export { MoodInput };
