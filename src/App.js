import React, { Component } from 'react';
import { Header } from './components/Header';
import { Player } from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

class App extends Component {

  state = {
    players : [
      {
        playerName: 'Arwen',
        id: 1,
        score: 0
      },
      {
        playerName: 'Moya',
        id: 2,
        score: 0
      },
      {
        playerName: 'Senor',
        id: 3,
        score: 0
      },
      {
        playerName: 'Lily',
        id: 4,
        score: 0
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

  handleScoreChange = (index, delta) => {
    console.log('DRD __ `handleScoreChange');
    console.log('DRD __ `handleScoreChange` logging `index` and `delta`:::', index, delta);
    this.setState( prevState => {
      return {
        score: prevState.players[index].score += delta
      };
    });
  }

  handleAddPlayer = (value) => {
    this.setState( prevState => {
      return {
        players: [...prevState.players, value]
      };
    });
  }

  render() {
    return (
      <main className="app-wrapper">
        <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
          // totalPlayers={this.state.players.length}
          // totalPoints={this.state.players.reduce((total, player) => total += player.score, 0)}
        />
        {/* generate Player component for each player in array */}
        {this.state.players.map((player, index) =>
          <Player
            playerName={player.playerName}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />)}
          <AddPlayerForm
            addPlayer={this.handleAddPlayer}
            newPlayerId={this.state.players[this.state.players.length -1].id + 1}
          />
        </div>
      </main>
    );
  }
}

export default App;
