import {RECEIVED_INSTRUCTOR} from '../actions/instructorActionTypes';

export default (
  state = false,
  action
) => {
  switch (action.type) {
    case RECEIVED_INSTRUCTOR:
      return {
        ...state,
        ...action.payload.instructor,
      }
    default:
      return state
  }
}

