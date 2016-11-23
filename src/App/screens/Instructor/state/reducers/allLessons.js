import {merge, findIndex} from 'lodash'
import {
  RECEIVED_ALL_LESSONS,
  STARTED_UPDATE_LESSON_STATE,
} from '../actions/instructorActionTypes';

export default (
  state = {
    lessons: [],
    total: '0',
  },
  action
) => {
  switch (action.type) {
    case RECEIVED_ALL_LESSONS:
      return action.payload.lessons
    case STARTED_UPDATE_LESSON_STATE:
      const updatedLessonIndex = findIndex(
        state.lessons,
        ['id', action.payload.lessonId]
      )
      return merge(state, {
        lessons: {
          [updatedLessonIndex]: {
            state: action.payload.newState,
          }
        },
      })
    default:
      return state
  }
}

