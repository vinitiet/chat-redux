import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages, fetchMessages } from '../actions';

import Message from '../components/message'

class MessageList extends Component {


  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
    setInterval(this.props.fetchMessages, 10000, this.props.selectedChannel);
  };

  componentWillUnmount() {
    clearInterval()
  }

  render() {
    return(
      <div className="message-list">
      <p>MessageList</p>
      {this.props.messages.map(message => <Message message={message} key={message.content}/> )}
      </div>
      )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages,
      fetchMessages: fetchMessages
     },
  dispatch );
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
