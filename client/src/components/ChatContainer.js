import React, { Component } from 'react';
import Chatbox from './Chatbox';
import ChatForm from './ChatForm';
import './ChatContainer.css';

class ChatContainer extends Component {
  render() {
    const { isUserPanelOpened, sid, username } = this.props;
    if (isUserPanelOpened) {
      return null;
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
