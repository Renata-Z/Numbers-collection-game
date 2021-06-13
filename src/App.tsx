import React from 'react';
import './App.scss';
import { Game } from './Containers/Game';
import { GameInstructions } from './Containers/GameInstructions';
import { APP_TITLE } from './utils/constants';

const App = () => {
  return (
    <div className='App'>
      <header className='app-header'>
        <h2 className='app-title'>{APP_TITLE}</h2>
      </header>
      <GameInstructions />
      <Game />
    </div>
  );
};

export default App;
