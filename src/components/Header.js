import React from 'react';
import { Stats } from './Stats';

export const Header = (props) => {
    return (
      <header className="App-header">
        <h1>{ props.title }</h1>
        <Stats
          totalPlayers={props.totalPlayers}
          totalPoints={props.totalPoints} 
        />
      </header>
    );
}
