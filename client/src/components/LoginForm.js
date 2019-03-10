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
      username_input: '',
      username_taken: null,
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
    const { username } = this.state.username_input;
    if (username !== '') {
      emit_add_username(username);
    }
  }

  showValidation() {
    this.setState({
      ...this.state,
      username_taken: true,
    });
  }

  hideValidation() {
    this.setState({
      ...this.state,
      username_taken: false,
    });
  }

  continueLogin({ sid }) {
    const { updateUsername } = this.props;
    const { username_input } = this.state;

    this.hideValidation();
    updateUsername(sid, username_input);
  }

  updateUsernameInputValue(event) {
    this.setState({
      ...this.state,
      username_input: event.target.value
    });
  }

  render() {
    const { username_input, username_taken } = this.state;
    return (
      <div>
        <div className="login-form">
          <input
            className="username-input-box"
            type="text"
            value={username_input}
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
          className={username_taken === true ? "error show" : "hide"}
        >
          Username is already taken. Try another one.
        </div>
      </div>
    );
  }
}

export default LoginForm;
