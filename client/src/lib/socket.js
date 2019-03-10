import io from 'socket.io-client';

const socket = io('http://0.0.0.0:30001');

export function on_username_taken(handler) {
  socket.on('username_taken', handler);
}

export function on_username_valid(handler) {
  socket.on('username_valid', handler);
}

export function on_load_chat_messages(handler) {
  socket.on('load_chat_messages', handler);
}

export function emit_add_username(username) {
  socket.emit('add_username', {
    username,
  });
}

export default socket