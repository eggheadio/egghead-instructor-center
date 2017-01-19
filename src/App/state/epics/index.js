import {combineEpics} from 'redux-observable'
import addUser from './addUser'
import removeUser from './removeUser'
import showNotification from './showNotification'
import fetchTechnologies from './fetchTechnologies'

export default combineEpics(
  addUser,
  removeUser,
  showNotification,
  fetchTechnologies
)
