import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <label>

      <input type="text" value={this.state.value} onChange={this.handleChange}  />
      </label>
      <input type="submit" value="Submit" />
      </form>
      )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
  dispatch );
};

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
