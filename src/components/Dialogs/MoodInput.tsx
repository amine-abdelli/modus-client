import { Button } from 'antd';
import { useState } from 'react';
import { Mood } from './Mood.enum';
import {
  IconGenerator,
} from '../utils/IconsGen/IconsGenerator';
import './Dialog.less';

const MoodInput = ({ onMoodRateSelect }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const moodArray = Object.keys(Mood).slice(0, 5).map((moodKey, i) => {
    const isNotSelected = activeIndex !== null && activeIndex !== i;
    return (
      <>
        <Button
          key={moodKey}
          disabled={!!isNotSelected}
          onClick={() => {
            onMoodRateSelect(i + 1);
            setActiveIndex(i);
          }}
          type="link"
        >
          {IconGenerator(moodKey, (isNotSelected ? 'selectable' : ''))}
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
