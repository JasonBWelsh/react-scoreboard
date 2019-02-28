import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//TODO: extract `players` into separate data file and import
// const players = [
//     {
//       playerName: 'Arwen',
//       score: 99,
//       id: 1
//     },
//     {
//       playerName: 'Moya',
//       score: 98,
//       id: 2
//     },
//     {
//       playerName: 'Senor',
//       score: 97,
//       id: 3
//     },
//     {
//       playerName: 'Lily',
//       score: 96,
//       id: 4
//     }
//   ];

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
