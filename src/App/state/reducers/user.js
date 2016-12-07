import {ENDED_FETCH_USER} from '../actions/appActionTypes';

const user = {
  id: 1,
  role: 'instructor',
}

export default (
  state = user || false,
  action
) => {
  switch (action.type) {
    case ENDED_FETCH_USER:
      const {user} = action.payload
      return {
        ...state,
        ...user,
      }
    default:
      return state
  }
}

