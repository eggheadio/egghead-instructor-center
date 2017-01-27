import {combineEpics} from 'redux-observable'
import addUser from './addUser'
import removeUser from './removeUser'
import showNotification from './showNotification'
import updateLessonState from './updateLessonState'
import submitLesson from './submitLesson'
import fetchTechnologies from './fetchTechnologies'
import fetchLesson from './fetchLesson'

export default combineEpics(
  addUser,
  removeUser,
  showNotification,
  updateLessonState,
  submitLesson,
  fetchTechnologies,
  fetchLesson
)
