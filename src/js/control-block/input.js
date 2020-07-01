import React from 'react';
import SpeechRecognition from './speech'

export default class Input extends React.Component {
    state = {
        value: '',
        micro:false,
    }

    inputError = this.props.error
    
    setMicTrue = () => {
      this.setState ({
          micro: true
      })
  }

  setMicFalse = () => {
      this.setState ({
          micro: false
      })
  }

  getButtonSeartText = () => {
      if (this.props.lang === 'ru') {
          return "Поиск"
      }
      if (this.props.lang === 'en') {
        return "Search"
    }
   else {
        return "Пошук"
    }
  }
    buttonSub = React.createRef();
    onRec = () => {
        const recognition = new SpeechRecognition();
        recognition.recognition.start();
        this.setMicTrue();
        recognition.recognition.onresult = (e) => {
          this.setValue(SpeechRecognition.setTextToInput(e));
          for (let i = 0; i < e.results.length; i += 1) {
            const { transcript } = e.results[i][0];
            if (e.results[i].isFinal) {
              this.setValue(transcript);
            }
          }
        };
            recognition.recognition.onspeechend = () => {
            this.buttonSub.current.click();
            recognition.recognition.stop();
            this.setMicFalse();
        };
      };

    setValue(inputValue) {
        this.setState({
            value: inputValue
        })
    }

    onChangeInput = (e) => {
        this.setValue(e.target.value)
        this.props.setErrors(   ''  )
    }

   handleClick = (e) => {
        e.preventDefault();
        this.props.setInput((this.state.value));
   }

   
   componentDidUpdate(prevProps, prevState) {
       if (this.props.loc !== prevProps.loc && this.state.value !== prevState.value) {
           this.inputError = '1'
       }
   }
  render() {
      return (
          <div>
           <div className ={this.props.dayTheme? 'input-container day-input':'input-container black'}>
              <span className ={this.state.micro ? 'micro-on': 'micro'} onClick={() =>  this.onRec()}></span>
             <div className="input-wrapper">
            <form >
            <input className={this.props.dayTheme? 'input_base':'input_base inputGray'} type="text" placeholder="Search city" value = {this.state.value} onChange =  {(e) => this.onChangeInput(e)} />
            <button className={this.props.dayTheme? 'button-search':'button-search textBlack'} ref={this.buttonSub}  onClick={(e) =>this.handleClick(e)}> {this.getButtonSeartText()}</button>
            </form>   
        </div>
            </div>
           <div className='eror'>{this.props.error} </div>     
           </div>
      );
  }
}