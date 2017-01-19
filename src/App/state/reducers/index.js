import {combineReducers} from 'redux';
import user from './user'
import notification from './notification'
import technologies from './technologies'

export default combineReducers({
  user,
  notification,
  technologies,
})
