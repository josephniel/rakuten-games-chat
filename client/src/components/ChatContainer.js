import React, { Component } from 'react';
import Chatbox from './Chatbox';
import ChatForm from './ChatForm';
import LoadMoreButton  from './LoadMoreButton';
import './ChatContainer.css';


class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMoreMessages: true,
    };

    this.updateHasMoreMessages = this.updateHasMoreMessages.bind(this);
    this.scrollContainer = this.scrollContainer.bind(this);
  }

  updateHasMoreMessages(hasMoreMessages) {
    this.setState({
      ...this.state,
      hasMoreMessages,
    });
  }

  scrollContainer(yPosition) {
    this.el.scrollTo(0, yPosition);
  }

  render() {
    const { sid, username } = this.props;
    const { hasMoreMessages } = this.state;

    return (
      <div
        className="chat-container"
        ref={el => { this.el = el; }}
      >
        {
          hasMoreMessages === true ?
            <LoadMoreButton /> :
            null
        }
        <Chatbox
          scrollContainer={this.scrollContainer}
          username={username}
          updateHasMoreMessages={this.updateHasMoreMessages}
        />
        <ChatForm sid={sid} />
      </div>
    );
  }
}

export default ChatContainer;
