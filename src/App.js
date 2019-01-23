import React, { Component } from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Scoreboard</h1>
      <span className="stats">Players: 3</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Player Name
      </span>
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">99</span>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Player />
       <Player />
       <Player />
      </div>
    );
  }
}

export default App;
