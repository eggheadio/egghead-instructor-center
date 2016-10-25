import {combineEpics} from 'redux-observable'
import instructor from './slices/instructor/epics'

export default combineEpics(
  instructor
)
