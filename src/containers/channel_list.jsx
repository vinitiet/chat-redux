import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions';

import Channel from './channel'

class ChannelList extends Component {

  componentWillMount() {
    this.props.setChannels();
  };


  render() {
    return(
      <div className="channel-list">
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
