import React, { Component } from 'react';
import ActiveUsersContainer from './ActiveUsersContainer';
import ChatContainer from './ChatContainer';
import Header from './Header';
import LoginContainer from './LoginContainer';
import { initialize_socket } from '../lib/socket';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserPanelOpened: false,
      sid: null,
      username: null,
      userCount: 0,
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateUserCount = this.updateUserCount.bind(this);
    this.updateUserPanelOpened = this.updateUserPanelOpened.bind(this);

    initialize_socket(props.serverUrl);
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

  updateUserPanelOpened(isUserPanelOpened) {
    this.setState({
      ...this.state,
      isUserPanelOpened,
    });
    this.forceUpdate();
  }

  componentWillUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    const { isUserPanelOpened, sid, username, userCount } = this.state;
    return (
      <div className="app">
        <LoginContainer 
          needLogin={username === null}
          updateUsername={this.updateUsername}
        />
        <Header
          chatName="Rakuten Games Chat"
          updateUserPanelOpened={this.updateUserPanelOpened}
          userCount={userCount}
        />
        <ChatContainer
          sid={sid}
          username={username}
        />
        <ActiveUsersContainer
          isUserPanelOpened={isUserPanelOpened}
          updateUserCount={this.updateUserCount}
          username={username}
        />
      </div>
    );
  }
}

export default App;
