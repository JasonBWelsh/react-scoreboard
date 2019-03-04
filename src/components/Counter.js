import React, { Component } from 'react';

export class Counter extends Component {
    constructor() {
      super();
      this.state = {
        score: 0
      }
    }

    incrementScore = () =>  {
        console.log('DRD __ `incrementScore`');
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
      }
    
      decrementScore = () => {
        console.log('DRD __ `decrementScore`');
        this.setState( prevState => ({
            score: prevState.score - 1
        }));
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