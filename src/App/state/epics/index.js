import {combineEpics} from 'redux-observable'
import fetchUser from './fetchUser'
import addNotification from './addNotification'

export default combineEpics(
  fetchUser,
  addNotification,
)
