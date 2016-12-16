import {ENDED_FETCH_USER} from '../actions/appActionTypes';

export default (
  state = false,
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

