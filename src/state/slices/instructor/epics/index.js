import {combineEpics} from 'redux-observable'
import fetchInstructorById from './fetchInstructorById'
import fetchLessonsForInstructor from './fetchLessonsForInstructor'

export default combineEpics(
  fetchInstructorById,
  fetchLessonsForInstructor,
)
