import filter from 'lodash/filter'
import reduce from 'lodash/reduce'
import lessonStates from '../../../../../../utils/lessonStates'

export default (lessons) => reduce(lessonStates, (memo, state) => ([
  ...memo,
  ...filter(lessons, lesson => lesson.state === state),
]), [])
