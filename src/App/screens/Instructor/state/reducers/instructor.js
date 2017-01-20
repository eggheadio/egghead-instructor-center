import {ENDED_FETCH_INSTRUCTOR} from '../actions/instructorActionTypes';

export default (
  state = false,
  action
) => {
  switch (action.type) {

    case ENDED_FETCH_INSTRUCTOR:
      return {
        ...action.payload.instructor,
      }

    default:
      return state

  }
}

