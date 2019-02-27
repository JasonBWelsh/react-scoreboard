import React, { Component } from 'react';
import './App.css';
// import { prependOnceListener } from 'cluster';

const Header = (props) => {
  return (
    <header className="App-header">
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

class Counter extends Component {

  state = {
    score: 0,
  };

  incrementScore() {
    console.log('DRD __ `incrementScore`');
    // setState({
    //   this.state.score: 
    // });
  }

  decrementScore() {
    console.log('DRD __ `decrementScore`');
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.playerName}
      </span>
      <Counter />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
       <Header title="Scoreboard" totalPlayers={this.props.initialPlayers.length} />
       {/* generate Player component for each player in array */}
       {this.props.initialPlayers.map(player => 
        <Player 
          playerName={player.playerName} 
          key={player.id.toString()} 
        />)}
      </div>
    );
  }
}

export default App;
