import React, { Component } from 'react';
import Chatbox from './Chatbox';
import ChatForm from './ChatForm';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header chatName="Rakuten Games Chat" />
        <Chatbox />
        <ChatForm />
      </div>
    );
  }
}

export default App;
