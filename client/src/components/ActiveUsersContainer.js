import React, { Component } from 'react';
import { on_update_active_users } from '../lib/socket';
import './ActiveUsersContainer.css';

class ActiveUsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }
    this.updateActiveUsers = this.updateActiveUsers.bind(this);
  }

  componentDidMount() {
    on_update_active_users(this.updateActiveUsers);
  }

  updateActiveUsers({ active_users }) {
    this.setState({
      users: active_users,
    });
    this.props.updateUserCount(active_users.length);
  }

  render() {
    return (
      <div className="active-users"></div>
    );
  }
}

export default ActiveUsersContainer;
