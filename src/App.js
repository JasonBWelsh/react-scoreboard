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
        id: 1
      },
      {
        playerName: 'Moya',
        id: 2
      },
      {
        playerName: 'Senor',
        id: 3
      },
      {
        playerName: 'Lily',
        id: 4
      }
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('DRD __ `handleRemovePlayer');
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  render() {
    return (
      <main className="app-wrapper">
        <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {/* generate Player component for each player in array */}
        {this.state.players.map(player => 
          <Player 
            playerName={player.playerName}
            id={player.id} 
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
          />)}
        </div>
      </main>
    );
  }
}

export default App;
