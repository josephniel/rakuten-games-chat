import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './LoginContainer.css';

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-box">
            <span>Please input your name to login</span>
            <LoginForm updateUsername={this.props.updateUsername} />
        </div>
      </div>
    );
  }
}

export default LoginContainer;
