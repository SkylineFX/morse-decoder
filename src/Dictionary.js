import React from 'react';

function Table(props) {
  if (!props.show) { return null; }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Dictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showTable: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showTable: !state.showTable
    }));
  }

  render() {
    return (
      <div className='mt-10'>
        <div onClick={this.handleToggleClick} className='flex items-center gap-2 mb-2 cursor-pointer'>
          <p className='text-lg font-bold'>
            Morse Alphabet 
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#f2f4f5"}}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
        </div>
        <div className='border border-solid border-[#2c2e2f] mb-8'></div>
        <Table show={this.state.showTable} />
      </div>
    );
  }
}

export default Dictionary