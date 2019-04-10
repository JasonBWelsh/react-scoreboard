import React, { Component } from 'react';

class StopWatch extends Component {

  state = {
    isRunning: false
  }

  handleStopWatch = () => {
    console.log('DRD __ `startStop`');
    this.setState( prevState => {
      return {
        isRunning: !prevState.isRunning
      };
    });
  }

  render() {

    let runningState = this.state.isRunning ? 'Stop' : 'Start';

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopWatch}>{runningState}</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
