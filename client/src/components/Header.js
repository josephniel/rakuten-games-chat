import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserPanelOpened: false,
    };

    this.openUserPanel = this.openUserPanel.bind(this);
    this.closeUserPanel = this.closeUserPanel.bind(this);
  }

  openUserPanel() {
    this.setState({
      ...this.state,
      isUserPanelOpened: true,
    });
    this.props.updateUserPanelOpened(true);
  }

  closeUserPanel() {
    this.setState({
      ...this.state,
      isUserPanelOpened:false,
    });
    this.props.updateUserPanelOpened(false);
  }

  render() {
    const { chatName, userCount } = this.props;
    const { isUserPanelOpened } = this.state;

    const openButton = (
      <div
        className="info-toggle"
        onClick={this.openUserPanel}
      >
        Users ({userCount})
      </div>
    );
    const closeButton = (
      <div
        className="info-toggle"
        onClick={this.closeUserPanel}
      >
        Back
      </div>
    );

    return (
      <div className="header">
        {isUserPanelOpened ? closeButton: null}
        <div className="name">
          {!isUserPanelOpened ? chatName : "Active Users"}
        </div>
        {!isUserPanelOpened ? openButton : null}
      </div>
    );
  }
}

export default Header;
