import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let player = {
      playerName: this.state.value,
      id: this.props.newPlayerId,
      score: 0
    };
    console.log('DRD __ `handleSubmit` and `player`:::', player);
    this.props.addPlayer(player);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <input
          type="submit"
          value="Add Player"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default AddPlayerForm;
