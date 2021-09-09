import { useGetUser } from '../../../api/hooks/useGetUser';
import { formatDate, formatDateToCalendar } from '../../../utils';
import { MoodInputArgs } from '../../Dialogs/DialogMood';
import { MoodCalendar } from './MoodCalendar';

const MoodTracker = () => {
  const { data } = useGetUser();
  const { moods } = data?.isLoggedIn;
  const moodHistory = moods?.map((mood: MoodInputArgs) => {
    const { phrase, createdAt, rate } = mood;
    return {
      value: rate,
      day: formatDateToCalendar(createdAt!),
      phrase: phrase || '',
    };
  });

  return (
    <div className="moodtracker--wrapper">
      <div style={{ height: '500px' }}>
        <MoodCalendar
          formatDate={formatDate}
          fromDate={moods[0].createdAt}
          moodHistory={moodHistory}
        />
      </div>
    </div>
  );
};

export { MoodTracker };
