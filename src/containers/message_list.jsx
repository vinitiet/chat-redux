import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages, fetchMessages } from '../actions';

import Message from '../components/message'
import MessageForm from './message_form'

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
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
        <MessageForm />
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
