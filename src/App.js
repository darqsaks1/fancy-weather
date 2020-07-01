import React from 'react';
import ButtonsCollector from './js/control-block/collector-btn'
import MainCollector from './js/main-block/main-collector';
import backgroundImage from './img/background.jpg'
import { getLinkToImage } from './js/main-block/get-api';
import Preloader from './js/control-block/Preloader';

export default class App extends React.Component {
    state = {
        img: backgroundImage,
        temp: localStorage.getItem('Temp') || 'c',
        lang: localStorage.getItem('Lang') || 'en',
        loc: undefined,
        input: undefined,
        load: false,
        timezone: undefined,
        current: undefined,
        dayTime: undefined,
        dayTheme: true,
        error: undefined

    }

    setErrors = (errors) => {
        this.setState({
            error: errors, load: false
        })
    }
    setDayThemeTrue = () => {
        this.setState({
            dayTheme: true
        })
    }

    setDayThemeFalse = () => {
        this.setState({
            dayTheme: false
        })
    }

    setDayTime = (data) => {
        this.setState({
            dayTime: data
        })
    }
    setCurrent = (data) => {
        this.setState({
            current: data
        })
    }
    setTimeZone = (data) => {
        this.setState({
            timezone: data
        })
    }
    setLoad = () => {
        this.setState({
            load: true
        })
    }

    setLoadFalse = () => {
        this.setState({
            load: false
        })
    }

    setLocation = (location) => {
        this.setState({
            loc: location
        })
    }

    setLinkImage = async () => {
        this.setLoad()
        const data = await getLinkToImage(`${this.state.current} ${this.state.dayTime}`);
        console.log(`${this.state.current} ${this.state.dayTime}`)
        this.setState({
            img: data
        })
        this.setLoadFalse();
   
    }
    setTemp = (temperature) => {
        this.setState({
            temp: temperature
        })
    }

    setLang = (language) => {
        this.setState({
            lang: language
        })
    }

    setInput = (inputValue) => {
        this.setState({
            input: inputValue
        })
    }

    getLocalStorage = () => {
        localStorage.setItem('Temp', this.state.temp);
        localStorage.setItem('Lang', this.state.lang);
    }


    componentDidMount() {
        this.getLocalStorage();
    }

    componentDidUpdate() {
        this.getLocalStorage();
    }

    render() {
        return (
            <div className='image-api'
                style={{
                    backgroundImage: `url(${this.state.img})`
                }}>
                <div className='image-opacity'>
                    {this.state.load ? < Preloader /> : ""}
                    <ButtonsCollector
                        setLinkImage={this.setLinkImage}
                        temp={this.state.temp}
                        setTemp={this.setTemp}
                        setLang={this.setLang}
                        lang={this.state.lang}
                        setInput={this.setInput}
                        dayTime={this.state.dayTime}
                        setDayThemeTrue={this.setDayThemeTrue}
                        setDayThemeFalse={this.setDayThemeFalse}
                        dayTheme={this.state.dayTheme}
                        error={this.state.error}
                        setErrors={this.setErrors}
                        loc={this.state.loc}
                    />
                    <MainCollector
                        setLocation={this.setLocation}
                        loc={this.state.loc}
                        lang={this.state.lang}
                        input={this.state.input}
                        temp={this.state.temp}
                        setLoadTrue={this.setLoad}
                        setLoadFalse={this.setLoadFalse}
                        setTimeZone={this.setTimeZone}
                        timezone={this.state.timezone}
                        setCurrent={this.setCurrent}
                        setDayTime={this.setDayTime}
                        dayTheme={this.state.dayTheme}
                        setErrors={this.setErrors}
                    />
                </div>
            </div>
        );
    }
}