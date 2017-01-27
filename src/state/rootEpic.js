import {combineEpics} from 'redux-observable'
import instructorScreenEpics from 'screens/Instructor/state/epics'
import adminScreenEpics from 'screens/Admin/state/epics'
import appScreenEpics from './epics'

export default combineEpics(
  appScreenEpics,
  instructorScreenEpics,
  adminScreenEpics
)
