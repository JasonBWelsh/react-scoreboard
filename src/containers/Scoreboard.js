import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import '../App.css';

class Scoreboard extends Component {

  // state = {
  //   players : [
  //     {
  //       playerName: 'Arwen',
  //       id: 1,
  //       score: 0,
  //       isHighScore: false
  //     },
  //     {
  //       playerName: 'Moya',
  //       id: 2,
  //       score: 0,
  //       isHighScore: false
  //     },
  //     {
  //       playerName: 'Senor',
  //       id: 3,
  //       score: 0,
  //       isHighScore: false
  //     },
  //     {
  //       playerName: 'Lily',
  //       id: 4,
  //       score: 0,
  //       isHighScore: false
  //     }
  //   ]
  // }

  // handleRemovePlayer = (id) => {
  //   this.setState( prevState => {
  //     return {
  //       players: prevState.players.filter( p => p.id !== id )
  //     };
  //   });
  // }

  // handleScoreChange = (index, delta) => {
  //   this.setState( prevState => {
  //     return {
  //       score: prevState.players[index].score += delta
  //     };
  //   });
  // }

  // handleAddPlayer = (name) => {
  //   let newPlayerId = this.state.players[this.state.players.length - 1].id + 1;
  //   let newPlayer = {
  //     playerName: name,
  //     id: newPlayerId,
  //     score: 0
  //   };
  //   this.setState( prevState => {
  //     return {
  //       players: [
  //         ...prevState.players,
  //         newPlayer
  //       ]
  //     };
  //   });
  // }

  static propTypes = {
    players: PropTypes.array.isRequired
  }

  getHighScore = () => {
    console.log('DRD __ `getHighScore`');
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    console.log('DRD __ logging `scores`:::', scores);
    console.log('DRD __ logging `highScore`:::', highScore);
    return highScore ? highScore : null;
  }

  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const scoreChange = bindActionCreators(PlayerActionCreators.scoreChange, dispatch);
    const highScore = this.getHighScore();

    const playerComponents = players.map((player, index) => 
      <Player 
        index={index}
        playerName={player.playerName}
        score={player.score}
        id={player.id}
      />
    );

    return (
      <main className="app-wrapper">
        <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
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
            isHighScore={highScore === player.score}
          />)}
          <AddPlayerForm
            addPlayer={this.handleAddPlayer}
            // newPlayerId={newPlayerId}
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);
