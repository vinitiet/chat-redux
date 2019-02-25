import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, fetchMessages } from '../actions';

import Channel from './channel'

class ChannelList extends Component {

  componentWillMount() {
    this.props.setChannels();
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedChannel !== this.props.selectedChannel) {
  //     this.props.fetchMessages(nextProps.selectedChannel);
  //   }
  // }


  render() {
    return(
      <div className="channels-container">
      <p>Redux chat</p>
      {this.props.channels.map(channel =>
        <Channel
          className={this.props.selectedChannel === channel ? 'selected channel' : 'channel'}
          channel={channel}
          key={channel}
        />
      )}
      </div>
      )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setChannels: setChannels,
      fetchMessages: fetchMessages
     },
  dispatch );
};

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
