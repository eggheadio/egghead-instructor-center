import {combineReducers} from 'redux';
import instructor from './instructor'
import instructorLessons from './instructorLessons'
import allLessons from './allLessons'

export default combineReducers({
  instructor,
  instructorLessons,
  allLessons,
})
