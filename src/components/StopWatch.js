import React, { Component } from 'react';

class StopWatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  }

  handleStopWatch = () => {
    console.log('DRD __ `startStop`');
    this.setState( prevState => {
      return {
        isRunning: !prevState.isRunning
      };
    });
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now()});
    }
  }

  handleResetStopWatch = () => {
    console.log('DRD __ `handleResetStopWatch`');
    this.setState({ elapsedTime: 0 });
  }

  componentDidMount() {
    console.log('DRD __ `componentDidMount`');
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  tick = () => {
    console.log('DRD __  `tick`');
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  }

  render() {
    let runningState = this.state.isRunning ? 'Stop' : 'Start';
    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopWatch}>{runningState}</button>
        <button onClick={this.handleResetStopWatch}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
