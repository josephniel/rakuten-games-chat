import React, { Component } from 'react';
import { emit_send_message } from '../lib/socket';
import './ChatForm.css';

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: null,
      message_input: '',
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.updateMessageInputValue = this.updateMessageInputValue.bind(this);
  }

  componentWillReceiveProps() {
    const { sid } = this.props;
    this.setState({
      ...this.state,
      sid,
    });
  }

  updateMessageInputValue(event) {
    this.setState({
      ...this.state,
      message_input: event.target.value,
    })
  }

  sendMessage() {
    const { sid, message_input } = this.state;
    emit_send_message(sid, message_input);
    this.setState({
      ...this.state,
      message_input: '',
    });
  }

  render() {
    const { message_input } = this.state;
    return (
      <div className="chat-form">
        <input
          className="message-input-box"
          type="text"
          value={message_input}
          onChange={this.updateMessageInputValue}
        />
        <button
          className="send-button"
          onClick={this.sendMessage}
        >
          Send
        </button>
      </div>
    );
  }
}

export default ChatForm;
