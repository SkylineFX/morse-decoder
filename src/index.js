import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'
import Translator from './Translator'
import Dictionary from './Dictionary'
import Notification from './Notification'
import Clock from './Clock'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-[#232526] text-[#e4e6e7] w-screen h-screen flex flex-col items-center'>
      <Header/>
      <main className='w-9/12 h-full pt-20 px-4'>
        <Translator/>
        <Dictionary/>
        <Notification/>
      </main>
      <Clock/>
    </div>
  </React.StrictMode>
);