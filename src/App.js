import React, { Component } from 'react';
import { Header } from './components/Header';
import { Player } from './components/Player'; 
import './App.css';
// import { prependOnceListener } from 'cluster';

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
