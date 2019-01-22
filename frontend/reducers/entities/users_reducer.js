import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
