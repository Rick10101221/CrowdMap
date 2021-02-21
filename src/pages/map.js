import io from 'socket.io-client';

const socket = io('https://crowdmap-server.herokuapp.com/%27');
// const socket = io('http://localhost:5000/%27);
console.log(socket);

socket.on('connect', () =>{
  alert('connected');
  socket.emit("update", {"coord": [100, 100]});
});

socket.on('get', (data) =>{
  console.log(data);
  addPoints(data);
});
