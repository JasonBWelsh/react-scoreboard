import React, { Component } from 'react';

export class Counter extends Component {
    constructor() {
      super();
      this.state = {
        score: 0
      }
      this.incrementScore = this.incrementScore.bind(this);
      this.decrementScore = this.decrementScore.bind(this);
    }
  
    incrementScore() {
      console.log('DRD __ `incrementScore`');
      this.setState({
        score: this.state.score + 1
      });
    }
  
    decrementScore() {
      console.log('DRD __ `decrementScore`');
      this.setState({
        score: this.state.score - 1
      });
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