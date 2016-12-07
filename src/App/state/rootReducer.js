import {combineReducers} from 'redux'
import appScreen from './reducers'
import instructorScreen from '../screens/Instructor/state/reducers'

export default combineReducers({
  appScreen,
  instructorScreen,
})
