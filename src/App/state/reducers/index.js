import {combineReducers} from 'redux';
import user from './user'
import notification from './notification'

export default combineReducers({
  user,
  notification,
})
