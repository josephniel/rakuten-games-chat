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
      username: null,
    };
  }

  render() {
    const {username} = this.state;
    if (username !== null) {
      return (
        <div className="app">
          <Header chatName="Rakuten Games Chat" />
          <Chatbox username={username} />
          <ChatForm />
        </div>
      );
    }
    return (
      <div className="app">
        <LoginContainer />
        <Header chatName="Rakuten Games Chat" />
        <ChatForm />
      </div>
    );
  }
}

export default App;
