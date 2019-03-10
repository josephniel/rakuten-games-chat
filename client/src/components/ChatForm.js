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
    console.log(this.props.sid);
    this.setState({
      ...this.state,
      sid: this.props.sid,
    });
  }

  updateMessageInputValue(event) {
    this.setState({
      ...this.state,
      message_input: event.target.value,
    })
  }

  sendMessage() {
    emit_send_message(this.state.sid, this.state.message_input);
    this.setState({
      ...this.state,
      message_input: '',
    });
  }

  render() {
    return (
      <div className="chat-form">
        <input
          className="message-input-box"
          type="text"
          value={this.state.message_input}
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
