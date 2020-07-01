import React from 'react';

const DayTheme = (props) => {
  const { dayTheme, setDayThemeTrue, setDayThemeFalse } = props;
  return (
    <div className={dayTheme ? 'block-controlls-theme white' : 'block-controlls-theme black'}>
      <button className="btn-green day" type="button" onClick={() => setDayThemeTrue()}>
        <div className="sun" />
      </button>
      <button className="btn-green night" type="button" onClick={() => setDayThemeFalse()}>
        <div className="moon" />
      </button>
    </div>
  );
};

export default DayTheme;
