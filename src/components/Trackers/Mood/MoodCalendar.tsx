import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import { CustomTooltip } from './CustomTooltip';

type MoodCalendarObj = {
  day: string,
  value: number,
  phrase: string
}

interface MoodCalendarArgs {
  moodHistory: MoodCalendarObj[]
  fromDate: string,
  formatDate: (today: Date) => string
}

const MoodCalendar = ({ moodHistory, fromDate, formatDate }: MoodCalendarArgs) => {
  const today = new Date();
  return (
    <>
      <ResponsiveCalendar
        data={moodHistory}
        from={fromDate}
        to={formatDate(today)}
        minValue={0}
        maxValue={5}
        emptyColor="#eeeeee"
        colors={['#f4f1de', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f']}
        margin={{
          top: 40, right: 40, bottom: 40, left: 40,
        }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
        tooltip={(e: any) => {
          console.log(e);
          return (
            <CustomTooltip
              phrase={e?.data?.phrase}
            />
          );
        }}
      />
    </>
  );
};

export { MoodCalendar };
