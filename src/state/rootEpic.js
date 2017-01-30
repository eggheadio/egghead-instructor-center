import {combineEpics} from 'redux-observable'

import appScreenEpics from 'state/epics'
import instructorsScreenEpics from 'screens/Instructors/state/epics'

export default combineEpics(
  appScreenEpics,
  instructorsScreenEpics
)
