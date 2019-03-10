import React, { Component } from 'react';
import {
  on_add_chat_message,
  on_load_chat_messages,
} from '../lib/socket';
import ChatMessage from './ChatMessage';
import './Chatbox.css';


class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    this.updateMessages = this.updateMessages.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    on_load_chat_messages(this.updateMessages);
    on_add_chat_message(this.addMessage);
  }

  addMessage(message) {
    this.setState({
      messages:  [
        ...this.state.messages,
        JSON.parse(message),
      ]
    });
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
