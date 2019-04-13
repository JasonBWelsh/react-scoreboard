import React from 'react';
import PropTypes from 'prop-types';
import { Stats } from './Stats';
import StopWatch from './StopWatch';

export const Header = ({ players, title }) => {
    return (
      <header className="App-header">
        <Stats players={players} />
        <h1>{ title }</h1>
        <StopWatch />
      </header>
    );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Scoreboard'
};
