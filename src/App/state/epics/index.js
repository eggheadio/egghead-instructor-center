import {combineEpics} from 'redux-observable'
import addNotification from './addNotification'

export default combineEpics(
  addNotification,
)
