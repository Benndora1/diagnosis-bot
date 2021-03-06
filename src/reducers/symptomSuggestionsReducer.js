import {
  FETCH_SUGGESTIONS,
  CLEAR_SUGGESTIONS
} from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SUGGESTIONS:
      return action.payload ? action.payload.sort((a, b) => a[1] < b[1] ? -1 : 1) : [];
    case CLEAR_SUGGESTIONS:
      return action.payload;
    default:
      return state;
  }
}
