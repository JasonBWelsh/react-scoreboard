import React from 'react';
import { Counter } from './Counter';

export const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          {props.playerName}
        </span>
        <Counter />
      </div>
    );
  }