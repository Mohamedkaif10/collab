import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = ({startDate=null, endDate=null}) => {
    const [dateRange, setDateRange] = useState({
        start: null,
        end: null,
      });
    
      const handleDateChange = (newDate) => {
        // If neither start nor end date is set, set the clicked date as the start date.
        if (!dateRange.start && !dateRange.end) {
          setDateRange({ start: newDate, end: newDate });
        }
        // If only the start date is set and the new date is after the start date, set it as the end date.
        else if (dateRange.start && !dateRange.end && newDate > dateRange.start) {
          setDateRange({ ...dateRange, end: newDate });
        }
        // If both start and end dates are set, reset the date range.
        else if (dateRange.start && dateRange.end) {
          setDateRange({ start: newDate, end: null });
        }
      };
    
      return (
        <div>
          <p>
            Selected Date Range:{' '}
            {dateRange.start && dateRange.end
              ? `${dateRange.start.toDateString()} - ${dateRange.end.toDateString()}`
              : 'Select a date range'}
          </p>
          <Calendar
            onChange={handleDateChange}
            selectRange
            value={[dateRange.start, dateRange.end]}
            tileContent={({ date, view }) => {
              if (view === 'month' && dateRange.start && dateRange.end) {
                if (date >= dateRange.start && date <= dateRange.end) {
                  return <div className="highlighted-date">{date.getDate()}</div>;
                }
              }
              return null;
            }}
          />
        </div>
      
      );
}

export default Calender