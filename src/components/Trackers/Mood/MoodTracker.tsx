import { useState } from 'react';
import { useGetUser } from '../../../api/hooks/useGetUser';
import { formatDate, formatDateToCalendar } from '../../../utils';
import { MoodInputArgs } from '../../Dialogs/DialogMood';
import { MoodCalendar, MoodCalendarObj } from './MoodCalendar';
import MoodCard from './MoodCard';

const MoodTracker = () => {
  const { data } = useGetUser();
  const { moods } = data?.isLoggedIn;
  const [hoveredMood, setHoveredMood] = useState<MoodCalendarObj>();
  if (!moods[0]) window.location.reload();
  const moodHistory = moods?.map((mood: MoodInputArgs) => {
    const { phrase, createdAt, rate } = mood;
    return {
      value: rate,
      day: formatDateToCalendar(createdAt!),
      phrase: phrase || '',
    };
  });

  function getCurrentHoveredMoodData({ day, phrase, value }: MoodCalendarObj) {
    setHoveredMood({ day, phrase, value });
  }
  console.log(moodHistory);

  return (
    <div className="moodtracker--wrapper">
      <div style={{ height: '200px' }}>
        <h1>Mood tracker</h1>
        <MoodCalendar
          fromDate={moods[0]?.createdAt}
          moodHistory={moodHistory}
          getCurrentHoveredMoodData={getCurrentHoveredMoodData}
        />
        {hoveredMood && <MoodCard hoveredMood={hoveredMood} />}
      </div>
    </div>
  );
};

export { MoodTracker };
