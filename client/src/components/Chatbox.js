import React, { Component } from 'react';
import { on_load_chat_messages } from '../lib/socket';
import ChatMessage from './ChatMessage';
import './Chatbox.css';


class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    on_load_chat_messages(this.updateMessages.bind(this));
  }

  updateMessages(data) {
    data = JSON.parse(data);
    this.setState({
      messages:  [
        ...data.messages,
        ...this.state.messages,
      ]
    });
  }

  render() {
    const chat_messages = this.state.messages.map((message, index) => {
      console.log(this.props.username);
      console.log(message.name);
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
