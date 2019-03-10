import React, { Component } from 'react';
import moment from 'moment';
import './ChatMessage.css';


class ChatMessage extends Component {
  render() {
    const {name, content, timestamp, is_sender} = this.props.message;
    const converted_timestamp = moment(new Date(timestamp.$date)).fromNow();
    return (
      <div className={is_sender ? "chat-message self": "chat-message"}>
        <div className="chat-message-name">{name}</div>
        <span className="chat-message-text">{content}</span>
        <div className="chat-message-time">{converted_timestamp}</div>
      </div>
    );
  }
}

export default ChatMessage;
