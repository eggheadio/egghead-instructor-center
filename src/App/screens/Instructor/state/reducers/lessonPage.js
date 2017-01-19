import {findIndex, reject, includes, slice} from 'lodash'
import {STARTED_UPDATE_LESSON_STATE} from '../../../../state/actions/appActionTypes';
import {
  STARTED_FETCH_INSTRUCTOR_LESSONS,
  STARTED_FETCH_ALL_LESSONS,
  ENDED_FETCH_INSTRUCTOR_LESSONS,
  ENDED_FETCH_ALL_LESSONS,
} from '../actions/instructorActionTypes';

export default (
  state = {
    total: '0',
    lessons: [],
    isLoading: false,
  },
  action
) => {
  switch (action.type) {

    case STARTED_FETCH_INSTRUCTOR_LESSONS:
    case STARTED_FETCH_ALL_LESSONS:
      const {states} = action.payload.lessonOptions
      return {
        ...state,
        isLoading: true,
        states,
      }

    case ENDED_FETCH_INSTRUCTOR_LESSONS:
    case ENDED_FETCH_ALL_LESSONS:
      const {lessonPage} = action.payload
      return {
        ...state,
        isLoading: false,
        ...lessonPage,
      }

    case STARTED_UPDATE_LESSON_STATE:
      const {lesson, newState} = action.payload
      const updatedLessonIndex = findIndex(
        state.lessons,
        ['id', lesson.id]
      )
      return includes(state.states, newState)
        ? {
            ...state,
            lessons: [
              ...slice(state.lessons, 0, updatedLessonIndex),
              {
                ...state.lessons[updatedLessonIndex],
                state: newState,
              },
              ...slice(state.lessons, updatedLessonIndex + 1)
            ],
          }
        : {
            ...state,
            total: `${state.total - 1}`,
            lessons: reject(state.lessons, ['id', lesson.id]),
          }

    default:
      return state

  }
}
