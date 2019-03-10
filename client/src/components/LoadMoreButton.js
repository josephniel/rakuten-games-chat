import React, { Component } from 'react';
import { emit_retrieve_messages } from '../lib/socket';
import './LoadMoreButton.css';


class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    }

    this.loadMoreMessages = this.loadMoreMessages.bind(this);
  }

  loadMoreMessages() {
    const { currentPage } = this.state;
    emit_retrieve_messages(currentPage);
    this.setState({
      ...this.state,
      currentPage: currentPage + 1,
    });
  }

  render() {
    return (
      <div
        className="load-more-button"
        onClick={this.loadMoreMessages}
      >
        Load more
      </div>
    );
  }
}

export default LoadMoreButton;
