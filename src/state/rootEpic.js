import {combineEpics} from 'redux-observable'
import appScreenEpics from './epics'
import instructorScreenEpics from '../screens/Instructor/state/epics'
import adminScreenEpics from '../screens/Admin/state/epics'

export default combineEpics(
  appScreenEpics,
  instructorScreenEpics,
  adminScreenEpics
)
