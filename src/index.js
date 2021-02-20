import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import io from 'socket.io-client';

// Connect to server via socket
// const socket = io('https://crowdmap-server.herokuapp.com/');
// const socket = io('http://localhost:5000');
// console.log(socket);

// socket.on('connect', () =>{
//   alert('connected');
//   socket.emit("update", {"coord": [100, 100]});
// });

//Update current location
//socket.emit("update", {"coord": [150 ,150]})


// socket.on('disconnect', () => {
//   alert('disconnect');
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
