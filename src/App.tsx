import React from 'react';
import './App.scss';
import { Game } from './Containers/Game';
import { GameInstructions } from './Containers/GameInstructions';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Array game</h2>
      </header>
      <GameInstructions />
      <Game />
    </div>
  );
};

export default App;
