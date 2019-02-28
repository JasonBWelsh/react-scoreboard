import React, { Component } from 'react';
import { Header } from './components/Header';
import { Player } from './components/Player'; 
import './App.css';
// import { prependOnceListener } from 'cluster';

class App extends Component {

  state = {
    players : [
      {
        playerName: 'Arwen',
        score: 0,
        id: 1
      },
      {
        playerName: 'Moya',
        score: 0,
        id: 2
      },
      {
        playerName: 'Senor',
        score: 0,
        id: 3
      },
      {
        playerName: 'Lily',
        score: 0,
        id: 4
      }
    ]
  }

  render() {
    return (
      <div className="scoreboard">
       <Header title="Scoreboard" totalPlayers={this.state.players.length} />
       {/* generate Player component for each player in array */}
       {this.state.players.map(player => 
        <Player 
          playerName={player.playerName} 
          key={player.id.toString()} 
        />)}
      </div>
    );
  }
}

export default App;
