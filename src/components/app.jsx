import React from 'react';

import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'
import MessageForm from '../containers/message_form'

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
