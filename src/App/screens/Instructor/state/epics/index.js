import {combineEpics} from 'redux-observable'
import fetchInstructor from './fetchInstructor'
import fetchInstructorLessons from './fetchInstructorLessons'
import fetchAllLessons from './fetchAllLessons'
import updateLessonState from './updateLessonState'
import submitLesson from './submitLesson'

export default combineEpics(
  fetchInstructor,
  fetchInstructorLessons,
  fetchAllLessons,
  updateLessonState,
  submitLesson
)
