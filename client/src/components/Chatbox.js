import React, { Component } from 'react';
import socket from '../lib/socket';
import ChatMessage from './ChatMessage';
import './Chatbox.css';


class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    socket.on('load_chat_messages', data => {
      data = JSON.parse(data);
      this.setState({
        messages:  [
          ...data.messages,
          ...this.state.messages,
        ]
      });
    });
  }

  render() {
    const chat_messages = this.state.messages.map((message, index) => {
      const newMessage = {
        ...message,
        is_sender: this.props.username === message.name,
      };
      return <ChatMessage message={newMessage} key={index} />;
    });
    return (
      <div className="chat-box">
        {chat_messages}
      </div>
    );
  }
}

export default Chatbox;
