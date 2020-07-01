import React from 'react';
import {
  weekDaysRu, monthesRu, weekDaysEn, weekDaysBe, monthesEn, monthesBe,
} from '../date-arrays/data-lang';


const FormattedDate = (props) => {
  const {
    lang, currentDay, date, timezone, currentMonthDay, currentMonth,
  } = props;
  const getCurrentMonthByLang = () => {
    if (lang === 'en') {
      return monthesEn[currentMonth];
    }
    if (lang === 'be') {
      return monthesBe[currentMonth];
    }
    return monthesRu[currentMonth];
  };

  const getCurrentDayByLang = () => {
    if (lang === 'en') {
      return weekDaysEn[currentDay];
    }
    if (lang === 'be') {
      return weekDaysBe[currentDay];
    }
    return weekDaysRu[currentDay];
  };

  const langDay = getCurrentDayByLang();
  const langMonth = getCurrentMonthByLang();

  return (
    <div>
      <h2>
        <span>{langDay}</span>
        <span>{currentMonthDay}</span>
        <span>{langMonth}</span>
        <span>{date.toLocaleTimeString('en-US', { hour12: false, timeZone: timezone })}</span>
      </h2>
    </div>
  );
};

export default FormattedDate;
