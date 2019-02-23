import { SET_MESSAGES } from '../actions';
import { CREATE_MESSAGE } from '../actions';
import { FETCH_MESSAGES } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    case FETCH_MESSAGES:
      return action.payload;
    case CREATE_MESSAGE:
      let newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
}
