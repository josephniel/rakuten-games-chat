import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <input className="username-input-box" type="text" />
        <button className="login-button">Login</button>
      </div>
    );
  }
}

export default LoginForm;
