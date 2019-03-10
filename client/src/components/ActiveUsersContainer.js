import React, { Component } from 'react';
import { on_update_active_users } from '../lib/socket';
import ActiveUserRow from './ActiveUserRow';
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
    const { isUserPanelOpened, username } = this.props;
    if (!isUserPanelOpened) {
      return null;
    }

    const activeUserRows = this.state.users.map((user, index) => 
      <ActiveUserRow
        user={user}
        key={index}
        isSelf={user === username}
      />
    );
    return (
      <div className="active-users">
        {activeUserRows}
      </div>
    );
  }
}

export default ActiveUsersContainer;
