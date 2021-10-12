import { ResponsiveCalendar } from '@nivo/calendar';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { formatDateToCalendar } from '../../../utils/tools';
import { CustomTooltip } from '../../utils/CustomTooltip/CustomTooltip';
import TextEditorModal from './TextEditorModal';

export interface MoodCalendarObj {
  day: string,
  value: number,
  phrase: string
}

interface MoodCalendarArgs {
  moodHistory: MoodCalendarObj[]
  fromDate: string,
  getCurrentHoveredMoodData: ({ date, phrase, value }: any) => void
}

const MoodCalendar = ({
  moodHistory, fromDate, getCurrentHoveredMoodData,
}: MoodCalendarArgs) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>();

  const today = new Date();
  return (
    <>
      <ResponsiveCalendar
        data={moodHistory}
        from={fromDate}
        to={formatDateToCalendar(today)}
        minValue={0}
        maxValue={5}
        emptyColor="#eeeeee"
        colors={['#f4f1de', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f']}
        monthBorderWidth={7}
        monthSpacing={30}
        monthBorderColor="#00000"
        margin={{
          top: 40, right: 40, bottom: 40, left: 40,
        }}
        yearSpacing={40}
        dayBorderWidth={2}
        dayBorderColor="#000"
        onClick={(day) => {
          setSelectedDate(day.date);
          console.log(selectedDate);
          setIsModalVisible(!isModalVisible);
        }}
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
        onMouseEnter={(e: any) => {
          const { phrase, value, day } = e?.data;
          return (
            getCurrentHoveredMoodData({
              phrase,
              value,
              day,
            }));
        }}
        tooltip={(e: any) => {
          const { phrase, value } = e?.data;
          return (
            <CustomTooltip
              phrase={phrase}
              moodValue={value}
              date={formatDateToCalendar(e?.date)}
            />
          );
        }}
      />
      {selectedDate && (
      <TextEditorModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectedDate={selectedDate}
      />
      )}
    </>
  );
};

export { MoodCalendar };
