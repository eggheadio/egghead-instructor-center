import {merge, findIndex, reject} from 'lodash'
import {
  ENDED_FETCH_INSTRUCTOR_LESSONS,
  ENDED_FETCH_ALL_LESSONS,
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

    case ENDED_FETCH_INSTRUCTOR_LESSONS:
    case ENDED_FETCH_ALL_LESSONS:
      return action.payload.lessonPage

    case STARTED_UPDATE_LESSON_STATE:
      const updatedLessonIndex = findIndex(
        state.lessons,
        ['id', action.payload.lessonId]
      )
      const hasNewStateInLessonPage = false
      return hasNewStateInLessonPage
        ? merge(state, {
            lessons: {
              [updatedLessonIndex]: {
                state: action.payload.newState,
              }
            },
          })
        : {
            total: `${state.total - 1}`,
            lessons: reject(state.lessons, ['id', action.payload.lessonId])
          }

    default:
      return state

  }
}

