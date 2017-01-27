import {combineEpics} from 'redux-observable'
import fetchInstructors from './fetchInstructors'

export default combineEpics(
  fetchInstructors,
)
