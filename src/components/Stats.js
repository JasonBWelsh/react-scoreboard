import React from 'react';
import PropTypes from 'prop-types';

export const Stats = ({ players }) => {

  let totalPlayers = players.length;
  let totalPoints = players.reduce((total, player) => total + player.score,0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};
