import React from 'react';

    // incrementScore = () =>  {
    //     console.log('DRD __ `incrementScore`');
    //     this.setState(prevState => ({
    //         score: prevState.score + 1
    //     }));
    //   }
    
    //   decrementScore = () => {
    //     console.log('DRD __ `decrementScore`');
    //     this.setState( prevState => ({
    //         score: prevState.score - 1
    //     }));
    //   }
export const Counter = (props) => {

    let index = props.index;

    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
          <span className="counter-score">{props.score}</span>
          <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
        </div>
    );
}