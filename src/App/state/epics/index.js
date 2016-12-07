import {combineEpics} from 'redux-observable'
import fetchUser from './fetchUser'

export default combineEpics(
  fetchUser,
)
