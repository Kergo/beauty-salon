import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { registerLocale, setDefaultLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  registerLocale('en-GB', enGB);  

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeIntervals={15}
      timeFormat="HH:mm"
      minDate={new Date()}
      inline
      showDisabledMonthNavigation
      locale="en-GB"
      placeholderText="Click to select a date and time"
      dateFormat="d MMMM, yyyy hh:mm"
    />
  );
};

export default DateTimePicker;
