import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { setMessages } from '../actions';

import Message from '../components/message'

class MessageList extends Component {
  // componentWillMount() {
  //   this.props.setMessages();
  //   console.log(this.props)
  // };

  render() {
    <div>
    <p>MessageList</p>
    </div>
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setMessages: setMessages },
//     dispatch );
// };


function mapStateToProps(state) {
  return {
    messages: state.messages
  };
};

export default MessageList;
