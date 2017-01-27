import {filter, reduce} from 'lodash'
import lessonStates from 'screens/Instructor/utils/lessonStates'

export default (lessons) => reduce(lessonStates, (memo, state) => ([
  ...memo,
  ...filter(lessons, lesson => lesson.state === state),
]), [])
