import React, { Component } from 'react';
import Chatbox from './Chatbox';
import ChatForm from './ChatForm';
import './ChatContainer.css';

class ChatContainer extends Component {
  render() {
    const { username, sid, isUserPanelOpened } = this.props;
    if (isUserPanelOpened) {
      null;
    }

    return (
      <div className="chat-container">
        <Chatbox username={username} />
        <ChatForm sid={sid} />
      </div>
    );
  }
}

export default ChatContainer;
