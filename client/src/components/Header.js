import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">{this.props.chatName}</div>
        <div className="info-toggle">Users ({this.props.userCount})</div>
      </div>
    );
  }
}

export default Header;
