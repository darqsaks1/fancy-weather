
import React from 'react';
import Clock from './time/time';
import City from './current/current-city';
import Weather from './current/current-weather';
import Map from './map/map';

const MainCollector = (props) => {
  const {
    lang, timezone, dayTheme, loc, setLocation, input, setLoadTrue, setLoadFalse,
    setErrors, temp, setTimeZone, setCurrent, setDayTime,
  } = props;
  return (
    <div className="main-responsive">
      <div className={dayTheme ? 'city-time-block white' : 'city-time-block black'}>
        <Clock
          lang={lang}
          timezone={timezone}
          dayTheme={dayTheme}
        />
        <City
          loc={loc}
          lang={lang}
          setLocation={setLocation}
          input={input}
          setLoadTrue={setLoadTrue}
          setLoadFalse={setLoadFalse}
          dayTheme={dayTheme}
          setErrors={setErrors}
        />
      </div>
      <div className="main-wrapper">
        <Weather
          loc={loc}
          lang={lang}
          setLocation={setLocation}
          temp={temp}
          setTimeZone={setTimeZone}
          setCurrent={setCurrent}
          setDayTime={setDayTime}
          dayTheme={dayTheme}
          setErrors={setErrors}
        />
        <Map
          loc={loc}
          lang={lang}
          dayTheme={dayTheme}
        />

      </div>
    </div>
  );
};

export default MainCollector;
