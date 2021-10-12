import React, { useState } from 'react';
import { Cards } from '../components/cards/Cards';
import { MainCard } from '../components/mainCard/MainCard';
import './App.css';

function App() {
  const [timeFrame, setTimeFrame] = useState("Daily");

  const handleClick = ({target}) => {
    // Add/Remove .main-card__btn--active class from buttons
    const buttons =[...document.querySelector('.main-card__btn-container').children];
    buttons.forEach(button => {
      button.classList.remove('main-card__btn--active');
    });
    target.classList.add('main-card__btn--active');

    // Set new timeFrame
    setTimeFrame(target.innerHTML);
  }

  return (
    <>
      <header className="header"></header>
      <main className="app" id="app">
        <MainCard handleClick={handleClick} />
        <Cards timeFrame={timeFrame} />
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#app">Frances McKenzie</a>.
      </footer>
    </>
  );
}

export default App;
