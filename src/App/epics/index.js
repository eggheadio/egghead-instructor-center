import {combineEpics} from 'redux-observable';

import instructorScreenEpics from '../screens/Instructor/epics'

export default combineEpics(
  instructorScreenEpics
);