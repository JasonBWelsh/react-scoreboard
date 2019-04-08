import React from 'react';
import { Stats } from './Stats';

export const Header = (props) => {
    return (
      <header className="App-header">
        <Stats
          // totalPlayers={props.totalPlayers}
          // totalPoints={props.totalPoints}
          players={props.players}
        />
        <h1>{ props.title }</h1>
      </header>
    );
}
