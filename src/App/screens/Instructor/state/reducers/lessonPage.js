import {findIndex, reject, includes} from 'lodash'
import {
  STARTED_FETCH_INSTRUCTOR_LESSONS,
  STARTED_FETCH_ALL_LESSONS,
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

    case STARTED_FETCH_INSTRUCTOR_LESSONS:
    case STARTED_FETCH_ALL_LESSONS:
      const {states} = action.payload.lessonOptions
      return {
        ...state,
        states,
      }

    case ENDED_FETCH_INSTRUCTOR_LESSONS:
    case ENDED_FETCH_ALL_LESSONS:
      const {lessonPage} = action.payload
      return {
        ...state,
        ...lessonPage,
      }

    case STARTED_UPDATE_LESSON_STATE:
      const {lessonId, newState} = action.payload
      const updatedLessonIndex = findIndex(
        state.lessons,
        ['id', lessonId]
      )
      return includes(state.states, newState)
        ? {
            ...state,
            lessons: {
              ...state.lessons,
              [updatedLessonIndex]: {
                ...state.lessons[updatedLessonIndex],
                state: newState,
              }
            },
          }
        : {
            ...state,
            total: `${state.total - 1}`,
            lessons: reject(state.lessons, ['id', lessonId])
          }

    default:
      return state

  }
}

