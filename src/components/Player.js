import React, { PureComponent } from 'react';
import { Counter } from './Counter';

class Player extends PureComponent {

    render() {

      const { id, score, index, changeScore, playerName, removePlayer } = this.props;

      return (
        <div className="player">
          <span className="player-name">
          <button className="remove-player" onClick={ () => removePlayer(id) }>x</button>
            {playerName}
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
}

export default Player;
