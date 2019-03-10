import React, { Component } from 'react';
import ActiveUsersContainer from './ActiveUsersContainer';
import Chatbox from './Chatbox';
import ChatForm from './ChatForm';
import Header from './Header';
import LoginContainer from './LoginContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: null,
      username: null,
      userCount: 0,
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateUserCount = this.updateUserCount.bind(this);
  }

  updateUsername(sid, username) {
    this.setState({
      ...this.state,
      sid,
      username,
    });
    this.forceUpdate();
  }

  updateUserCount(userCount) {
    this.setState({
      ...this.state,
      userCount,
    });
    this.forceUpdate();
  }

  render() {
    const { sid, username, userCount } = this.state;
    return (
      <div className="app">
        {
          username === null ?
            <LoginContainer updateUsername={this.updateUsername} /> :
            null
        }
        <Header
          chatName="Rakuten Games Chat"
          userCount={userCount}
        />
        <Chatbox username={username} />
        <ChatForm sid={sid} />
        <ActiveUsersContainer updateUserCount={this.updateUserCount} />
      </div>
    );
  }
}

export default App;
