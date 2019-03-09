const socket = io('http://0.0.0.0:30001');
const userId = '5c835b3dcbb5bf0038e81597';


const askUsername = () => {
  const username = prompt("Enter your name : ", "your name here");
  socket.emit('add_username', {
    username,
  });
}


const reaskUsername = () => {
  askUsername();
}

socket.on('username_requested', askUsername);
socket.on('username_taken', reaskUsername);
socket.on('username_valid', () => {});
socket.on('update_active_users', (data) => {
  document.getElementById('users').innerText = data.active_users;
})
