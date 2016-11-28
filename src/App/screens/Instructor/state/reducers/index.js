import {combineReducers} from 'redux';
import instructor from './instructor'
import lessonPage from './lessonPage'

export default combineReducers({
  instructor,
  lessonPage,
})
