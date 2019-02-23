import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeChannel } from '../actions';

class Channel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('current props:')
    console.log(this.props)
    this.props.changeChannel(this.props.channel)
  }
  render() {

    return(
      <p onClick={this.handleClick}>
      #{this.props.channel}
      </p>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeChannel: changeChannel,
     },
  dispatch );
};

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Channel)
