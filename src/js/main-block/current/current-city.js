import React from 'react'
import { getIpInfo } from '../get-api';
import { getGeo } from '../get-api';
import { geoInput } from '../get-api';
export default class City extends React.Component {
    state = {
        city: undefined
    }

    setCity = async (location, lang) => {
        const data = await getGeo(location, lang)
        this.setState({
            city: data
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

    componentDidMount() {
        this.props.setLoadTrue();

        getIpInfo().then(data => {
            this.props.setLocation(data); this.setCity(data, this.props.lang);
            this.props.setLoadFalse();
        })
            .catch(() => {
                this.props.setErrors(this.getSeartText() );
            })
    }

    componentDidUpdate(prevProps) {

        if (this.props.input !== prevProps.input) {
            this.props.setLoadTrue();
            geoInput(this.props.input, this.props.lang).then(data => this.props.setLocation(data))
                .catch(() => {
                    this.props.setErrors(this.getSeartText());
                })
        }

        if (this.props.loc !== prevProps.loc && this.state.city !== undefined) {
            getGeo(this.props.loc, this.props.lang).then(data => {
                this.setCity(data, this.props.lang);
                this.props.setLoadFalse()
            })
                .catch(() => {
                    this.props.setErrors(this.getSeartText());
                })
        }

        if (this.props.lang !== prevProps.lang) {
            getGeo(this.props.loc, this.props.lang).then(data => {
                this.setCity(data, this.props.lang);
                this.props.setLoadFalse()
            })
                .catch(() => {
                    this.props.setErrors(this.getSeartText());
                })
        }
    }

    render() {
        return (
            <div className='city-block'>
                <h2 className={this.props.dayTheme ? 'city' : 'city textRed'}>{this.state.city}</h2>
            </div>
        );
    }
}