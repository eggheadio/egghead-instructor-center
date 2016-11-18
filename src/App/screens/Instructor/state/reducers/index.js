import {combineReducers} from 'redux';
import * as instructorActionTypes from '../actions/instructorActionTypes';

const instructor = (
  state = false,
  action
) => {
  switch (action.type) {
    case instructorActionTypes.RECEIVED_INSTRUCTOR:
      return {
        ...state,
        ...action.payload.instructor,
      }
    default:
      return state
  }
}

const instructorLessons = (
  state = {
    lessons: [],
    total: '0',
  },
  action
) => {
  switch (action.type) {
    case instructorActionTypes.RECEIVED_LESSONS_FOR_INSTRUCTOR:
      return action.payload.lessons
    default:
      return state
  }
}

const allLessons = (
  state = {
    lessons: [],
    total: '0',
  },
  action
) => {
  switch (action.type) {
    case instructorActionTypes.RECEIVED_ALL_LESSONS:
      return action.payload.lessons
    default:
      return state
  }
}

export default combineReducers({
  instructor,
  instructorLessons,
  allLessons,
})
