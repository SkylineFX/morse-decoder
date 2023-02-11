import React from 'react'
import Input from './Input'

class Translator extends React.Component {

  render() {
    return (
      <div>
        <Input lang="text"/>
        <Input lang="morse"/>
      </div>
    );
  }
}

export default Translator