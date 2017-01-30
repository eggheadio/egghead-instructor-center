import {combineReducers} from 'redux'

import user from './user'
import notification from './notification'
import technologies from './technologies'
import lessons from './lessons'
import instructor from './instructor'
import lessonPage from './lessonPage'

export default combineReducers({
  user,
  notification,
  technologies,
  lessons,
  instructor,
  lessonPage
})
