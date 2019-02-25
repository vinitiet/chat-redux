// TODO: add and export your own actions

export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SET_CHANNELS = 'SET_CHANNELS';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

const channels = ['general', 'react', 'paris']

export function setMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());

    return {
      type: SET_MESSAGES,
      payload: promise
    };
}

export function createMessage(channel, author, content) {

  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;

const body = { author: author,
      content: content,
      created_at: Date.now()
    };
const promise = fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  }

  return {
    type: CREATE_MESSAGE,
    payload: { author: author,
      content: content,
      created_at: Date.now()
    }
  }
}

export function fetchMessages(channel) {

  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;

  const promise = fetch(url).then(response => response.json())

    return {
      type: FETCH_MESSAGES,
      payload: promise
    };
  }

export function setChannels() {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  const promise =   fetch(url).then(response => response.json())

    return {
      type: SET_CHANNELS,
      payload: channels
    };
  };

export function changeChannel(channel) {


    return {
      type: CHANGE_CHANNEL,
      payload: channel
    };

  // }) ;

}


