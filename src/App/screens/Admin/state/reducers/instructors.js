import {ENDED_FETCH_INSTRUCTORS} from '../actions/adminActionTypes';

export default (
  state = false,
  action
) => {
  switch (action.type) {

    case ENDED_FETCH_INSTRUCTORS:
      return [
        ...state,
        ...action.payload.instructors,
      ]

    default:
      return state

  }
}

