import React from 'react'
import TextInput from './TextInput'
import Notification from './Notification';
import { ToMorse, ToText } from '../morse'

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '', mode: 'text', showNotification: false, notificationText: ""};

    this.handleMorseChange = this.handleMorseChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.toggleNotification = this.toggleNotification.bind(this);
  }

  handleTextChange(input) {
    this.setState({mode: 'text', input});
  }
  
  handleMorseChange(input) {
    this.setState({mode: 'morse', input});
  }

  toggleNotification(value, text)
  {
    this.setState({notificationText: text})
    this.setState({showNotification: value});
  }

  render() {
    const mode = this.state.mode
    const input = this.state.input

    const text = (mode === 'morse') ? ToText(input) : input.toUpperCase()
    const morse = (mode === 'text') ? ToMorse(input) : input

    const showNotification = this.state.showNotification;
    const notificationText = this.state.notificationText;

    return (
      <div className='flex flex-col gap-2 md:gap-0 items-center justify-between xl:flex-row'>
        <TextInput 
          mode="text" 
          input={text} 
          onInputChange={this.handleTextChange}
          onOpenNotification={this.toggleNotification}/>
        <TextInput 
          mode="morse" 
          input={morse} 
          onInputChange={this.handleMorseChange}
          onOpenNotification={this.toggleNotification}/>
        <Notification 
          show={showNotification} 
          text={notificationText}
          onCloseNotification={this.toggleNotification}/>
      </div>
    );
  }
}

export default Translator