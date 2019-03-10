import React, { Component } from 'react';
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
    };
    this.updateUsername = this.updateUsername.bind(this);
  }

  updateUsername(sid, username) {
    this.setState({
      sid,
      username,
    });
    this.forceUpdate();
  }

  render() {
    const { sid, username } = this.state;
    return (
      <div className="app">
        {
          username === null ?
            <LoginContainer updateUsername={this.updateUsername} /> :
            null
        }
        <Header chatName="Rakuten Games Chat" />
        <Chatbox username={username} />
        <ChatForm sid={sid} />
      </div>
    );
  }
}

export default App;
