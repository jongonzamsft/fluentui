import * as React from 'react';
import { Calendar, DateRangeType, DayOfWeek, defaultDayPickerStrings } from '@uifabric/date-time';

const workWeekDays = [DayOfWeek.Tuesday, DayOfWeek.Saturday, DayOfWeek.Wednesday, DayOfWeek.Friday];

export const CalendarInlineNonContiguousWorkWeekDaysExample: React.FunctionComponent = () => {
  const [selectedDateRange, setSelectedDateRange] = React.useState<Date[]>();
  const [selectedDate, setSelectedDate] = React.useState<Date>();

  const onSelectDate = React.useCallback((date: Date, dateRangeArray: Date[]): void => {
    setSelectedDate(date);
    setSelectedDateRange(dateRangeArray);
  }, []);

  let dateRangeString = 'Not set';
  if (selectedDateRange) {
    const rangeStart = selectedDateRange[0];
    const rangeEnd = selectedDateRange[selectedDateRange.length - 1];
    dateRangeString = rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
  }

  return (
    <div style={{ height: '360px' }}>
      <div>Selected date: {selectedDate?.toLocaleString() || 'Not set'}</div>
      <div>Selected range: {dateRangeString}</div>

      <Calendar
        dateRangeType={DateRangeType.WorkWeek}
        highlightCurrentMonth={false}
        highlightSelectedMonth
        showGoToToday
        workWeekDays={workWeekDays}
        onSelectDate={onSelectDate}
        value={selectedDate}
        firstDayOfWeek={DayOfWeek.Monday}
        strings={defaultDayPickerStrings}
      />
    </div>
  );
};
