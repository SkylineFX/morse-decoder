import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Input from './Input'
import Clock from './Clock'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-[#232526] text-[#e4e6e7] w-screen h-screen flex flex-col gap-10 justify-center items-center'>
      <Clock/>
      <Input/>
    </div>
  </React.StrictMode>
);