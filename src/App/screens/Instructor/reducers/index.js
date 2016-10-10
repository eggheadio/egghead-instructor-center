import {combineReducers} from 'redux';
import * as InstructorScreenActionType from '../actions/InstructorScreenActionType';

const instructor = (state = false, action) => {
  switch (action.type) {
    case InstructorScreenActionType.RECEIVE_INSTRUCTOR:
      return Object.assign({}, state, action.payload.instructor)
    default:
      return state
  }
}

const instructorLessons = (state = {lessons: [], total: '0'}, action) => {
  switch (action.type) {
    case InstructorScreenActionType.RECEIVE_LESSONS_FOR_INSTRUCTOR:
      return action.payload.lessons
    default:
      return state
  }
}

export default combineReducers({
  instructor,
  instructorLessons
});