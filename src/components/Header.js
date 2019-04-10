import React from 'react';
import { Stats } from './Stats';
import StopWatch from './StopWatch';

export const Header = (props) => {
    return (
      <header className="App-header">
        <Stats players={props.players} />
        <h1>{ props.title }</h1>
        <StopWatch />
      </header>
    );
}
