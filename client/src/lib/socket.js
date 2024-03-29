import io from 'socket.io-client';

let socket = null;

export function initialize_socket(serverUrl) {
  socket =  io.connect(serverUrl, {transports: ['websocket']});
}

export function on_username_taken(handler) {
  socket.on('username_taken', handler);
}

export function on_username_valid(handler) {
  socket.on('username_valid', handler);
}

export function on_update_active_users(handler) {
  socket.on('update_active_users', handler);
}

export function on_load_chat_messages(handler) {
  socket.on('load_chat_messages', handler);
}

export function on_add_chat_message(handler) {
  socket.on('add_chat_message', handler);
}

export function emit_add_username(username) {
  socket.emit('add_username', {
    username,
  });
}

export function emit_send_message(sid, message) {
  socket.emit('send_message', {
    sid,
    message,
  });
}

export function emit_retrieve_messages(currentPage) {
  socket.emit('retrieve_messages', {
    page: currentPage,
  });
}

export default socket
