import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './LoginContainer.css';

class LoginContainer extends Component {
  render() {
    const { needLogin, updateUsername } = this.props;
    if (!needLogin) {
      return null;
    }

    return (
      <div className="login-container">
        <div className="login-box">
            <span>Please input your name to login</span>
            <LoginForm updateUsername={updateUsername} />
        </div>
      </div>
    );
  }
}

export default LoginContainer;
