import React, { Component } from 'react';
import './ChatForm.css';

class ChatForm extends Component {
  render() {
    return (
      <div className="chat-form">
        <input className="message-input-box" type="text" />
        <button className="send-button">Send</button>
      </div>
    );
  }
}

export default ChatForm;
