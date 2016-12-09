import {combineEpics} from 'redux-observable'
import appScreenEpics from './epics'
import instructorScreenEpics from '../screens/Instructor/state/epics'

export default combineEpics(
  appScreenEpics,
  instructorScreenEpics
)
