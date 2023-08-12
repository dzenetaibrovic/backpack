import React, { useState } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE
} from "bpk-component-calendar";
import BpkInput, {
  INPUT_TYPES
} from "bpk-component-input";
import format from "date-fns/format";
import { cssModules } from "bpk-react-utils";
import STYLES from "./App.scss";

const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");

const daysOfWeek = [
  {
    name: "Sunday",
    nameAbbr: "Sun",
    nameNarrow: "S",
    index: 0,
    isWeekend: true,
  },
  {
    name: "Monday",
    nameAbbr: "Mon",
    index: 1,
    isWeekend: false,
  },
  {
    name: "Tuesday",
    nameAbbr: "Tue",
    index: 2,
    isWeekend: false,
  },
  {
    name: "Wednesday",
    nameAbbr: "Wed",
    index: 3,
    isWeekend: false,
  },
  {
    name: "Thursday",
    nameAbbr: "Thu",
    index: 4,
    isWeekend: false,
  },
  {
    name: "Friday",
    nameAbbr: "Fri",
    index: 5,
    isWeekend: false,
  },
  {
    name: "Saturday",
    nameAbbr: "Sat",
    index: 6,
    isWeekend: true,
  },
];

  const getClassName = cssModules(STYLES);

  function App() {
    const [selectionConfiguration, setSelectionConfiguration] = useState({
      type: CALENDAR_SELECTION_TYPE.single,
      date: null,
    });

    const handleDateSelect = (date) => {
      setSelectionConfiguration({
        ...selectionConfiguration,
        date: date,
      });
    };
    return(
      <div className={getClassName('App')}>
      
        <header className={getClassName('App__header')}>
          <div className={getClassName('App__header-inner')}>
            <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
          </div>
        </header>
        <main className={getClassName('App__main')}>
          <BpkInput
              id="dateInput"
              type={INPUT_TYPES.text}
              name="date"
              value={(selectionConfiguration.date || '').toString()}
              placeholder="Departure date"
            />
          <BpkCalendar 
              id="calendar"
              onDateSelect={handleDateSelect}
              formatMonth={formatMonth}
              formatDateFull={formatDateFull}
              daysOfWeek={daysOfWeek}
              weekStartsOn={1}
              changeMonthLabel="Change month"
              nextMonthLabel="Next month"
              previousMonthLabel="Previous month"
              selectionConfiguration={selectionConfiguration}
          />
          <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
        </main>
      </div>
    );
  }

 export default App;


