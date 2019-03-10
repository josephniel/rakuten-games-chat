import React, { Component } from 'react';
import './ActiveUserRow.css';


class ActiveUserRow extends Component {
  render() {
    const { user, isSelf } = this.props;
    return (
      <div className="active-user-row">
        {user} {isSelf ? "(you)" : null}
    </div>
    );
  }
}

export default ActiveUserRow;
