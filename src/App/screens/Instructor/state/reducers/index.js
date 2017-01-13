import {combineReducers} from 'redux';
import instructor from './instructor'
import lessonPage from './lessonPage'
import technologies from './technologies'

export default combineReducers({
  instructor,
  lessonPage,
  technologies,
})
