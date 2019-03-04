import React from 'react';
import { Counter } from './Counter';

export const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
          {props.playerName}
        </span>
        <Counter 
            incrementScore={props.incrementScore} 
            decrementScore={props.decrementScore} 
        />
      </div>
    );
}