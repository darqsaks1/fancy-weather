import React from 'react'
import { getCurrentWeather } from '../get-api';
import { weatherInfoEn } from "../date-arrays/data-lang";
import { weatherInfoRu } from "../date-arrays/data-lang";
import { weatherInfoBe } from "../date-arrays/data-lang";
import { seasons } from "../date-arrays/data-lang";
import ThreeDays from './daily-weather';
import { convertToFahrenheit } from './formuls';
import getIcon from './icon'
import speak from '../../control-block/speechSintes';
import { deleteAllNumbers } from './formuls';
import SpeechRecognition from "react-speech-recognition";

class Weather extends React.Component {
  state = {
    temperature: undefined,
    overcast: undefined,
    fillLikes: undefined,
    wind: undefined,
    humidity: undefined,
    firstDay: undefined,
    secondDay: undefined,
    thirdDay: undefined,
    dataWeather1: undefined,
    dataWeather2: undefined,
    dataWeather3: undefined,
    id: undefined,
    idFirst: undefined,
    idSecond: undefined,
    idThird: undefined,
    voice: 'off',
  }

  setVoiceOn = () => {
    this.setState({
      voice: 'on'
    })
  }


  setVoiceOff = () => {
    this.setState({
      voice: 'off'
    })
  }

  getSeartText = () => {
    if (this.props.lang === 'ru') {
      return "Ошибка в подключении"
    }
    if (this.props.lang === 'en') {
      return "Have a bad request"
    }
    else {
      return "Памылка"
    }
  }
  SpeakController = () => {
    this.props.recognition.lang = 'en';
    if (this.state.voice === 'on') {
      this.props.startListening();
      if (this.props.finalTranscript === 'weather') {
        console.log(this.props.finalTranscript)
        speak(this.textEn, 'en-Us');
        this.props.resetTranscript();
      }
      console.log(this.props.finalTranscript)
      this.props.resetTranscript();
    } else {
      this.props.stopListening();
    }
  }

  renderInfoItems = (arr) => {
    return arr.map((item) => {
      switch (item.id) {
        case 1:
          return (<div key={item.id}>{item.name} {this.props.temp === 'c' ? Math.floor(this.state.fillLikes) : Math.floor(convertToFahrenheit(this.state.fillLikes))}°</div>);
        case 2:
          return (<div key={item.id}>{`${item.name} ${this.state.wind} m/s`}</div>);
        default:
          return (<div key={item.id}>{`${item.name} ${this.state.humidity}%`}</div>);
      }
    });
  };

  infoItems = (lang) => {
    switch (lang) {
      case 'ru':
        return this.renderInfoItems(weatherInfoRu);
      case 'be':
        return this.renderInfoItems(weatherInfoBe);
      default:
        return this.renderInfoItems(weatherInfoEn);
    }
  };

  setTemperature(data) {
    this.setState({
      temperature: data.current.temp,
      overcast: data.current.weather[0].description,
      fillLikes: Math.floor(data.current.feels_like),
      wind: Math.floor(data.current.wind_speed),
      humidity: data.current.humidity,
      first: data.daily[1].temp.day,
      second: data.daily[2].temp.day,
      third: data.daily[3].temp.day,
      id: data.current.weather[0].id,
      dataWeather1: new Date(data.daily[1].dt * 1000).getDay(),
      dataWeather2: new Date(data.daily[2].dt * 1000).getDay(),
      dataWeather3: new Date(data.daily[3].dt * 1000).getDay(),
      idFirst: data.daily[1].weather[0].id,
      idSecond: data.daily[2].weather[0].id,
      idThird: data.daily[3].weather[0].id,
    })
  }


  handleClickSpeak = () => {
    if (this.props.lang === 'en') {
      return speak(this.textEn, 'en-Us');
    }
    return speak(this.textRu, 'ru-Ru');
  };

  componentDidMount() {
    this.SpeakController();
    if (this.props.loc) {
      const geolocations = this.props.loc.split(',');
      getCurrentWeather(geolocations[0], geolocations[1], this.props.lang).then(data => {
        this.setTemperature(data)
        this.props.setDayTime((deleteAllNumbers(data.current.weather[0].icon)));
        this.props.setCurrent(seasons[new Date(data.current.dt * 1000).getMonth()])
        this.props.setTimeZone(data.timezone);
        this.textEn = `Now is ${this.state.temperature} degrees, ${this.state.overcast}, feels like ${this.state.fillLikes} degrees, wind is ${this.state.wind} metres/sec, humidity ${this.state.humidity} %`;
        this.textRu = `Сейчас ${this.state.temperature} градусов, ${this.state.overcast}, ощущается как ${this.state.fillLikes} градусов, ветер ${this.state.wind} метров в секунду, влажность ${this.state.humidity} %`;
      })
        .catch((err) => {
          this.props.setErrors(this.getSeartText());
        })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.finalTranscript !== prevProps.finalTranscript || this.state.voice !== prevState.voice) {
      this.SpeakController();
    }
    if (this.props.loc !== prevProps.loc || this.props.lang !== prevProps.lang) {
      const geolocations = this.props.loc.split(',');
      getCurrentWeather(geolocations[0], geolocations[1], this.props.lang).then(data => {
        this.props.setDayTime((deleteAllNumbers(data.current.weather[0].icon)));
        this.props.setCurrent(seasons[geolocations[0] > 0 ? 1 : 0])
        this.setTemperature(data);
        this.props.setTimeZone(data.timezone);
        this.textEn = `Now is ${this.state.temperature} degrees, ${this.state.overcast}, feels like ${this.state.fillLikes} degrees, wind is ${this.state.wind} metres/sec, humidity ${this.state.humidity} %`;
        this.textRu = `Сейчас ${this.state.temperature} градусов, ${this.state.overcast}, ощущается как ${this.state.fillLikes} градусов, ветер ${this.state.wind} метров в секунду, влажность ${this.state.humidity} %`;
      })
        .catch(() => {
          this.props.setErrors( this.getSeartText());
        })
    }
  }

  render() {
    return (
      <div className='weather-resp'>
        <div className='weather-block'>
          <div className={this.props.dayTheme ? 'temp' : 'temp textRed'}>{this.props.temp === 'c' ? Math.floor(this.state.temperature) : Math.floor(convertToFahrenheit(this.state.temperature))}°
            </div>
          <div className={this.props.dayTheme ? 'flex-column clouds' : 'flex-column clouds textBlack'}>
            <div className='flex-row'>
              <button className={this.props.dayTheme ? "btn-green night on" : "btn-green night off"} onClick={() => this.setVoiceOn()}>
                <div className='text-switcher' >On</div>
              </button>
              <button className={this.props.dayTheme ? "btn-green night on" : "btn-green night off"} onClick={() => this.setVoiceOff()}>
                <div className='text-switcher' >OFF</div>
              </button>
              <button className={this.props.dayTheme ? 'btn-green chat' : 'btn-green chat1'} onClick={(e) => this.handleClickSpeak(e)}>
                <div className="icon-iamge" ></div>
              </button>
            </div>
            <div>{this.state.overcast}</div>
            {this.infoItems(this.props.lang)}
            <div><img className='current-icon' src={getIcon(this.state.id)} alt='qw' /></div>
          </div>
        </div>
        <ThreeDays
          dayTheme={this.props.dayTheme}
          first={this.state.first}
          second={this.state.second}
          third={this.state.third}
          dataWeather1={this.state.dataWeather1}
          dataWeather2={this.state.dataWeather2}
          dataWeather3={this.state.dataWeather3}
          lang={this.props.lang}
          temp={this.props.temp}
          idFirst={this.state.idFirst}
          idSecond={this.state.idSecond}
          idThird={this.state.idThird}
        />
      </div>
    );
  }
}

export default SpeechRecognition(Weather);