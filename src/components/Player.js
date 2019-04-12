import React from 'react';
import { Counter } from './Counter';

export const Player = (props) => {
  const { id, score, index, changeScore } = props;
    return (
      <div className="player">
        <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
          {props.playerName}
        </span>
        <Counter
            id={id}
            score={score}
            index={index}
            changeScore={changeScore}
        />
      </div>
    );
}
