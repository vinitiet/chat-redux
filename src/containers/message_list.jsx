import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from '../components/message'

class MessageList extends Component {
//   // componentWillMount() {
//   //   this.props.setMessages();
//   //   console.log(this.props)
//   // };

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
    { setMessages: setMessages },
    dispatch );
};


function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
