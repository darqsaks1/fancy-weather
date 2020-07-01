import React from 'react';
import { weekDaysEnFull } from '../date-arrays/data-lang';
import { weekDaysBeFull } from '../date-arrays/data-lang';
import { weekDaysRuFull } from '../date-arrays/data-lang';
import { convertToFahrenheit } from './formuls';
import  getIcon  from './icon'
export default class ThreeDays extends React.Component {

    getWeekDaysNameFull = (el) => {
        if (this.props.lang === 'en') {
            return weekDaysEnFull[el]
        }
        if (this.props.lang === 'be') {
            return weekDaysBeFull[el]
        }
        return weekDaysRuFull[el];
    }

    render() {
        return (
            <div className={this.props.dayTheme ? 'flex-row daily white' : 'flex-row daily black'} >
                <div className={this.props.dayTheme ? 'days' : 'days textBlack'}>
                    <div className='flex-colunm'>
                        <div>{this.getWeekDaysNameFull(this.props.dataWeather1)}</div>
                        <div>{this.props.temp === 'c' ? Math.floor(this.props.first) : Math.floor(convertToFahrenheit(this.props.first))}°</div>
                    </div>
                    <img className='daily-icon' src={getIcon(this.props.idFirst)} alt='eqq' />
                </div>
                <div className={this.props.dayTheme ? 'days' : 'days textBlack'}>
                    <div className='flex-colunm'>
                        <div>{this.getWeekDaysNameFull(this.props.dataWeather2)}</div>
                        <div>{this.props.temp === 'c' ? Math.floor(this.props.second) : Math.floor(convertToFahrenheit(this.props.second))}°</div>
                    </div>
                    <img className='daily-icon' src={getIcon(this.props.idSecond)} alt='eff' />
                </div>
                <div className={this.props.dayTheme ? 'days' : 'days textBlack'}>
                    <div className='flex-colunm'>
                        <div>{this.getWeekDaysNameFull(this.props.dataWeather3)}</div>
                        <div>{this.props.temp === 'c' ? Math.floor(this.props.third) : Math.floor(convertToFahrenheit(this.props.third))}°</div>
                    </div>
                    <div> <img className='daily-icon' src={getIcon(this.props.idThird)} alt='eF' /> </div>
                </div>
            </div>
        );
    }
}
