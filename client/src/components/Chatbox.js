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
    const { messages } = this.state;
    this.setState({
      messages:  [
        ...messages,
        JSON.parse(message),
      ]
    });
  }

  updateMessages(data) {
    data = JSON.parse(data);
    const { messages } = this.state;

    this.setState({
      messages:  [
        ...data.messages,
        ...messages,
      ]
    });
  }

  render() {
    const { username } = this.props;
    const { messages } = this.state;

    const chat_messages = messages.map((message, index) => {
      const newMessage = {
        ...message,
        is_sender: username === message.name,
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
