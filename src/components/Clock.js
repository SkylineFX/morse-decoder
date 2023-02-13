import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div className='absolute bottom-0'>
        <h2 className='text-sm'>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock