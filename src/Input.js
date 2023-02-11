import React from 'react';

const TextToMorse = {
  A:".-", B:"-...", C:"-.-.", D:	"-..", E:".", F:"..-.", 
  G:"--.", H:"....", I:"..", J:".---", K:"-.-", L:	".-..", 
  M:"--", N:"-.", O:"---", P:".--.", Q:"--.-", R:".-.", 
  S:"...", T:"-", U:"..-", V:"...-", W:".--", X:"-..-", 
  Y:"-.--", Z:"--..", ' ': ' / ',
  0:"-----", 1:".----", 2:"..---", 3:"...--", 4:"....-", 5:".....", 
  6:"-....", 7:	"--...", 8:"---..", 9:"----."
}

function toMorse(text) {
  let morse = '';
  text.trim().toUpperCase().split().forEach(word => {
    for(let i = 0; i < word.length; i++)
    {
      if(TextToMorse[word[i]])
        morse = morse + TextToMorse[word[i]] + ' ';
      else
        morse = 'Invalid character(s)'
    }
  });
  return morse.trim();
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className='h-20 flex flex-col items-center'>
        <input 
          type="text" 
          placeholder='Type something' 
          value={this.state.value} 
          onChange={this.handleChange} 
          className="rounded-md p-2 bg-[#2c2e2f] text-[#f2f4f5] outline-none mb-4"
        />
        <p className='text-ellipsis text-center'>{toMorse(this.state.value)}</p>
      </div>
    );
  }
}

export default Input