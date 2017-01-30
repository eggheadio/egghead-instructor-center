import {combineReducers} from 'redux'

import appScreen from 'state/reducers'
import instructorsScreen from 'screens/Instructors/state/reducers'

export default combineReducers({
  appScreen,
  instructorsScreen,
})
