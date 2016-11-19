import {RECEIVED_INSTRUCTOR_LESSONS} from '../actions/instructorActionTypes';

export default (
  state = {
    lessons: [],
    total: '0',
  },
  action
) => {
  switch (action.type) {
    case RECEIVED_INSTRUCTOR_LESSONS:
      return action.payload.lessons
    default:
      return state
  }
}

