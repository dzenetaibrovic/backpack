// import React from 'react';
import { Component } from "react";
// import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';
// import BpkCalendar, { themeAttributes } from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from "@skyscanner/backpack-web/bpk-component-calendar";
import BpkInput, {
  INPUT_TYPES,
} from "@skyscanner/backpack-web/bpk-component-input";
import format from "date-fns/format";
import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";
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

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: this.props.selectionConfiguration.type,
        date: date,
      },
    });
  };

  render() {
    return (
      <div>
        <BpkInput
          id="dateInput"
          type={INPUT_TYPES.text}
          name="date"
          value={(this.state.selectionConfiguration.date || "").toString()}
          placeholder="Departure date"
        />
        <BpkCalendar
          id="calendar"
          onDateSelect={this.handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={this.state.selectionConfiguration}
        />
      </div>
    );
  }

  // FUNCTIONAL COMPONENT

  // const App = () => {
  //   const [selectionConfiguration, setSelectionConfiguration] = useState({
  //     type: CALENDAR_SELECTION_TYPE.single,
  //     date: null,
  //   })};

  //   const handleDateSelect = (date) => {
  //     setSelectionConfiguration({
  //       ...selectionConfiguration,
  //       date: date,
  //     });
  //   };
  //   <div className={getClassName('App')}>
  //     <header className={getClassName('App__header')}>
  //       <div className={getClassName('App__header-inner')}>
  //         <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
  //       </div>
  //     </header>
  //     <main className={getClassName('App__main')}>
  //     <BpkInput
  //         id="dateInput"
  //         type={INPUT_TYPES.text}
  //         name="date"
  //         value={(selectionConfiguration.date || '').toString()}
  //         placeholder="Departure date"
  //       />
  //     <BpkCalendar id="calendar"
  //           onDateSelect={this.handleDateSelect}
  //           formatMonth={formatMonth}
  //           formatDateFull={formatDateFull}
  //           daysOfWeek={daysOfWeek}
  //           weekStartsOn={1}
  //           changeMonthLabel="Change month"
  //           nextMonthLabel="Next month"
  //           previousMonthLabel="Previous month"
  //           selectionConfiguration={this.state.selectionConfiguration}>

  //     </BpkCalendar>
  //     <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
  //     </main>
  //   </div>

  // export default App;
}