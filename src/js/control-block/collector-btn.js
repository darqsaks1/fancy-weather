import React from 'react';
import Buttons from './buttons';
import Input from './input';
import DayTheme from './dayTheme';

const ButtonsCollector = (props) => {
  const {
    lang, error, dayTheme, setInput, loc,
    setErrors, temp, setDayThemeTrue, dayTime,
    setLinkImage, setDayThemeFalse, setLang, setTemp,
  } = props;
  return (
    <div className="header-controls">
      <Buttons
        setLinkImage={setLinkImage}
        temp={temp}
        setTemp={setTemp}
        setLang={setLang}
        lang={lang}
        dayTime={dayTime}
        dayTheme={dayTheme}
      />
      <DayTheme
        setDayThemeTrue={setDayThemeTrue}
        setDayThemeFalse={setDayThemeFalse}
        dayTheme={dayTheme}
      />
      <Input
       lang={lang}
        setInput={setInput}
        dayTheme={dayTheme}
        error={error}
        setErrors={setErrors}
        loc={loc}
      />
    </div>
  );
};

export default ButtonsCollector;
