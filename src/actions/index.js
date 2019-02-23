// TODO: add and export your own actions

export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SET_CHANNELS = 'SET_CHANNELS';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

const channels = ['general', 'react', 'paris']
const messagesStatic = [
{
  author:"anonymous93",
  content:"Hello world!",
  created_at:"2017-09-26T23:03:16.365Z"
},
{
  author:"anonymous77",
  content:"My name is anonymous77",
  created_at:"2017-09-26T23:03:21.194Z"
},
{
  author:"anonymous35",
  content:"This is message 3",
  created_at:"2017-09-26T23:03:21.194Z"
}
]

const messagesStatic2 = [
{
  author:"anonymous93",
  content:"Hello world!",
  created_at:"2017-09-26T23:03:16.365Z"
},
{
  author:"anonymous77",
  content:"My name is anonymous77",
  created_at:"2017-09-26T23:03:21.194Z"
},
{
  author:"anonymous35",
  content:"after fetch",
  created_at:"2017-09-26T23:03:21.194Z"
}
]

export function setMessages() {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  // fetch(url)
  // .then(response => response.json())
  // .then((data) => {
  //   return {
  //     type: 'SET_MESSAGES',
  //     payload: data
  //   };
  // })
  // .catch((error) => {

    return {
      type: SET_MESSAGES,
      payload: messagesStatic
    };

  // }) ;

}

export function createMessage(channel, author, content) {

  const url = 'https://wagon-chat.herokuapp.com/general/messages';

// const body = { author: author,
//       content: content,
//       created_at: Date.now()
//     };
// const promise = fetch(url, {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(body)
// }).then(r => r.json());

  // return {
  //   type: CREATE_MESSAGE,
  //   payload: promise
  // }

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
  console.log(url);
  // fetch(url)
  // .then(response => response.json())
  // .then((data) => {
  //   return {
  //     type: 'FETCH_MESSAGES',
  //     payload: data
  //   };
  // })
  // .catch((error) => {

    return {
      type: FETCH_MESSAGES,
      payload: messagesStatic2
    };

  // }) ;
}

export function setChannels() {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  // fetch(url)
  // .then(response => response.json())
  // .then((data) => {
  //   return {
  //     type: 'SET_MESSAGES',
  //     payload: data
  //   };
  // })
  // .catch((error) => {

    return {
      type: SET_CHANNELS,
      payload: channels
    };

  // }) ;

}
export function changeChannel(channel) {


    return {
      type: CHANGE_CHANNEL,
      payload: channel
    };

  // }) ;

}


