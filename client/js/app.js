const socket = io('http://0.0.0.0:30001');


const askUsername = () => {
  const username = prompt("Enter your name : ", "your name here");
  socket.emit('add_username', {
    username,
  });
}


const reaskUsername = () => {
  askUsername();
}


let sid = null;


socket.on('username_requested', askUsername);
socket.on('username_taken', reaskUsername);
socket.on('username_valid', (data) => {
  sid = data['sid'];
});
socket.on('update_active_users', (data) => {
  document.getElementById('users').innerText = data.active_users;
});


socket.on('load_chat_messages', data => {
  document.getElementById('users').innerHTML = document.getElementById('users').innerHTML + "<br />" + JSON.stringify(data);
});
socket.on('add_chat_message', (data) => {
  document.getElementById('users').innerHTML = document.getElementById('users').innerHTML + "<br />" + JSON.stringify(data);
});


document.getElementById('chatInput').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('chatMessage').value
  socket.emit('send_message', {
    'sid': sid,
    'message': message,
  });
});
