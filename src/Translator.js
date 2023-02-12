import React from 'react'
import TextInput from './TextInput'
import { ToMorse, ToText } from './morse'

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.handleMorseChange = this.handleMorseChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {input: '', mode: 'text'};
  }

  handleTextChange(input) {
    this.setState({mode: 'text', input});
  }
  
  handleMorseChange(input) {
    this.setState({mode: 'morse', input});
  }

  render() {
    const mode = this.state.mode
    const input = this.state.input

    const text = (mode === 'morse') ? ToText(input) : input.toUpperCase()
    const morse = (mode === 'text') ? ToMorse(input) : input

    return (
      <div className='flex justify-between'>
        <TextInput 
          mode="text" 
          input={text} 
          onInputChange={this.handleTextChange} />
        <TextInput 
          mode="morse" 
          input={morse} 
          onInputChange={this.handleMorseChange} />
      </div>
    );
  }
}

export default Translator