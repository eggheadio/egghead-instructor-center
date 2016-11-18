import {RECEIVED_LESSONS_FOR_INSTRUCTOR} from '../actions/instructorActionTypes';

export default (
  state = {
    lessons: [],
    total: '0',
  },
  action
) => {
  switch (action.type) {
    case RECEIVED_LESSONS_FOR_INSTRUCTOR:
      return action.payload.lessons
    default:
      return state
  }
}

