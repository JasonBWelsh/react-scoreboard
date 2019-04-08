import React from 'react';

export const Stats = (props) => {
  return (
    <React.Fragment>
      <span className="stats">Players: {props.totalPlayers}</span>
      <span className="stats">Points: {props.totalPoints}</span>
    </React.Fragment>
  );
};
