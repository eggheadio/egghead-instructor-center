import {combineEpics} from 'redux-observable'
import instructorScreenEpics from '../screens/Instructor/state/epics'

export default combineEpics(
  instructorScreenEpics
)
