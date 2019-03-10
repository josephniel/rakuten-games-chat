import React, { Component } from 'react';
import {
  emit_add_username,
  on_username_taken,
  on_username_valid,
} from '../lib/socket';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameInput: '',
      usernameTaken: null,
    };

    this.continueLogin = this.continueLogin.bind(this);
    this.hideValidation = this.hideValidation.bind(this);
    this.login = this.login.bind(this);
    this.showValidation = this.showValidation.bind(this);
    this.updateUsernameInputValue = this.updateUsernameInputValue.bind(this);
  }

  componentDidMount() {
    on_username_taken(this.showValidation);
    on_username_valid(this.continueLogin);
  }

  login() {
    const { usernameInput } = this.state;
    if (usernameInput !== '') {
      emit_add_username(usernameInput);
    }
  }

  showValidation() {
    this.setState({
      ...this.state,
      usernameTaken: true,
    });
  }

  hideValidation() {
    this.setState({
      ...this.state,
      usernameTaken: false,
    });
  }

  continueLogin({ sid }) {
    const { updateUsername } = this.props;
    const { usernameInput } = this.state;

    this.hideValidation();
    updateUsername(sid, usernameInput);
  }

  updateUsernameInputValue(event) {
    this.setState({
      ...this.state,
      usernameInput: event.target.value
    });
  }

  render() {
    const { usernameInput, usernameTaken } = this.state;
    return (
      <div>
        <div className="login-form">
          <input
            className="username-input-box"
            type="text"
            value={usernameInput}
            onChange={this.updateUsernameInputValue}
          />
          <button
            className="login-button"
            onClick={this.login}
          >
            Login
          </button>
        </div>
        <div
          className={usernameTaken === true ? "error show" : "hide"}
        >
          Username is already taken. Try another one.
        </div>
      </div>
    );
  }
}

export default LoginForm;
