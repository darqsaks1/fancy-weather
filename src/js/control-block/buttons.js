import React from 'react';

export default class Buttons extends React.Component {

    buttonsState = [
        { name: '°F', label: 'f' },
        { name: '°C', label: 'c' }

    ];
    buttonsLanguage = [
        { name: 'en', id: 1 },
        { name: 'ru', id: 2 },
        { name: 'be', id: 3 },
    ];

    handelClick = (e) => {
        this.props.setLang(e.target.innerText)
    }

    render() {
        const langugageButtons =
            this.buttonsLanguage.map(({ name, id }) => {
                return (
                    <div onClick={(e) => this.handelClick(e)} key={id}>{name}</div>
                )
            })

        const tempButtons =
            this.buttonsState.map(({ name, label }) => {
                const isActive = label === this.props.temp;
                const classNameTemp = isActive ? 'inactive' : '';
                const color = this.props.dayTheme ? 'button--fc textWhite' : 'button--fc textBlack'
                return (
                    <button className={`${color} ${classNameTemp}`} key={name} onClick={() => this.props.setTemp(label)}>{name}</button>
                );
            })

        return (
            <div className={this.props.dayTheme ? 'block-controlls white' : 'block-controlls black'} >
                <div className="buttons" onClick={
                    () => this.props.setLinkImage()
                }>
                    <button className="btn-green">
                        <img className="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png" alt='reloader' />
                    </button>
                </div>

                <div className="dropdown">
                    <button className={this.props.dayTheme ? 'dropbtn textWhite' : 'dropbtn textBlack'} >{this.props.lang}</button>
                    <div className="dropdown-content">
                        {langugageButtons}
                    </div>
                </div>
                {tempButtons}
            </div>
        );
    }
}