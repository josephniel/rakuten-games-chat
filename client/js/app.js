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
let currentPage = 0;
let messages = [];


socket.on('username_requested', askUsername);
socket.on('username_taken', reaskUsername);
socket.on('username_valid', (data) => {
  sid = data['sid'];
});


socket.on('update_active_users', (data) => {
  document.getElementById('users').innerText = data.active_users;
});


socket.on('load_chat_messages', data => {
  data = JSON.parse(data);
  messages = [
    ...data.messages,
    ...messages,
  ];
  document.getElementById('messages').innerHTML = JSON.stringify(messages);
});
socket.on('add_chat_message', (data) => {
  messages.push(data);
  document.getElementById('messages').innerHTML = JSON.stringify(messages);
});


document.getElementById('chatInput').addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('chatMessage').value
  socket.emit('send_message', {
    'sid': sid,
    'message': message,
  });
});

document.getElementById('loadMore').addEventListener('click', () => {
  socket.emit('retrieve_messages', {
    'page': currentPage,
  }, () => {
    currentPage++;
  });
});
