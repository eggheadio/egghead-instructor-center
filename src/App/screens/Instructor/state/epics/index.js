import {combineEpics} from 'redux-observable'
import fetchInstructor from './fetchInstructor'
import fetchInstructorLessons from './fetchInstructorLessons'
import fetchAllLessons from './fetchAllLessons'
import updateLessonState from './updateLessonState'
import submitLesson from './submitLesson'
import fetchTechnologies from './fetchTechnologies'

export default combineEpics(
  fetchInstructor,
  fetchInstructorLessons,
  fetchAllLessons,
  updateLessonState,
  submitLesson,
  fetchTechnologies
)
