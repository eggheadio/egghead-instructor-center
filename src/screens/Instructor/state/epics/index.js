import {combineEpics} from 'redux-observable'
import fetchInstructor from './fetchInstructor'
import fetchInstructorLessons from './fetchInstructorLessons'
import fetchAllLessons from './fetchAllLessons'

export default combineEpics(
  fetchInstructor,
  fetchInstructorLessons,
  fetchAllLessons
)
