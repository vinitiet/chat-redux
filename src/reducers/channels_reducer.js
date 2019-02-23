import { SET_CHANNELS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_CHANNELS:
      return action.payload;
    default:
      return state;
  }
}
