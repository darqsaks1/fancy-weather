
import React from 'react';
import FormattedDate from './formatted-date';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentDay: new Date().getDay(),
      currentMonth: new Date().getMonth(),
      currentMonthDay: new Date().getDate(),
    };
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      currentDay: new Date().getDay(),
      currentMonth: new Date().getMonth(),
      currentMonthDay: new Date().getDate(),
    });
  }

  render() {
    const {
      lang, timezone, dayTheme,
    } = this.props;
    const {
      currentDay, date, currentMonth, currentMonthDay,
    } = this.state;
    return (
      <div className={dayTheme ? 'time-block textWhite' : 'time-block textBlack'}>
        <FormattedDate
          date={date}
          currentDay={currentDay}
          currentMonth={currentMonth}
          currentMonthDay={currentMonthDay}
          lang={lang}
          timezone={timezone}
        />
      </div>
    );
  }
}
