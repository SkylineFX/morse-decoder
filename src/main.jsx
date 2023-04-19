import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header'
import Translator from './components/Translator'
import Alphabet from './components/Alphabet'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-[#232526] text-[#e4e6e7] w-screen min-h-screen flex flex-col items-center relative'>
      <Header/>
      <main className='w-11/12 md:w-9/12 h-full pt-20 px-4'>
        <Translator/>
        <Alphabet/>
      </main>
    </div>
  </React.StrictMode>
);