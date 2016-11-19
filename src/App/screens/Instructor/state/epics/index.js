import {combineEpics} from 'redux-observable'
import fetchInstructorById from './fetchInstructorById'
import fetchLessonsForInstructor from './fetchLessonsForInstructor'
import fetchAllLessons from './fetchAllLessons'

export default combineEpics(
  fetchInstructorById,
  fetchLessonsForInstructor,
  fetchAllLessons
)
