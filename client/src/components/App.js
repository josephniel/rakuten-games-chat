import React, { Component } from 'react';
import ActiveUsersContainer from './ActiveUsersContainer';
import ChatContainer from './ChatContainer';
import Header from './Header';
import LoginContainer from './LoginContainer';
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
          userCount={userCount}
          updateUserPanelOpened={this.updateUserPanelOpened}
        />
        <ChatContainer
          username={username}
          sid={sid}
          isUserPanelOpened={isUserPanelOpened}
        />
        <ActiveUsersContainer
          username={username}
          updateUserCount={this.updateUserCount}
          isUserPanelOpened={isUserPanelOpened}
        />
      </div>
    );
  }
}

export default App;
