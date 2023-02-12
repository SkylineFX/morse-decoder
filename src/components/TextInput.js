import React from 'react';
import Notification from './Notification';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showNotification: false}

    this.handleChange = this.handleChange.bind(this);
    this.toggleNotification = this.toggleNotification.bind(this)

    this.copyToClip = this.copyToClip.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target.value)
  }

  toggleNotification(value) {
    this.setState({showNotification: value});
  }

  copyToClip(text) {
    this.toggleNotification(true)
    navigator.clipboard.writeText(text)
  }

  playSound() {
    console.log("test");
  }

  render() {
    const mode = this.props.mode
    const text = this.props.input

    const show = this.state.showNotification

    return (
      <div className='w-5/12 h-full flex flex-col'>
        <Notification text={text} show={show} onCloseNotification={this.toggleNotification}/>
        <div className='flex justify-between items-center mb-2'>
          <p className='text-lg font-bold capitalize select-none'>{mode}</p>
          <div className='flex gap-2'>
            <button className='h-full hover:bg-[#2c2e2f] flex p-2 cursor-pointer' onClick={() => this.playSound()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#f2f4f5", cursor: 'pointer'}}><path d="M7 6v12l10-6z"></path></svg>
            </button>
            <button className='h-full hover:bg-[#2c2e2f] flex p-2 cursor-pointer' onClick={() => this.copyToClip(text)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#f2f4f5", cursor: 'pointer'}}><path d="M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"></path></svg>
            </button>
          </div>
        </div>
        <textarea 
          type="text" 
          rows="5"
          placeholder='Type something...' 
          value={text} 
          onChange={this.handleChange} 
          className="w-full h-full rounded-md p-2 bg-[#2c2e2f] text-[#f2f4f5] outline-none mb-4 placeholder:normal-case resize-none"
        />
      </div>
    );
  }
}

export default TextInput