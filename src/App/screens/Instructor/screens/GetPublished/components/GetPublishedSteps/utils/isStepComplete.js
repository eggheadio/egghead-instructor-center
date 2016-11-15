import includes from 'lodash/includes'
import indexOf from 'lodash/indexOf'
import slice from 'lodash/slice'
import some from 'lodash/some'
import lessonStates from '../../../../../utils/lessonStates'

export default (instructorLessonStates, minimumLessonState) => {
  const qualifyingLessonStates = slice(
    lessonStates,
    indexOf(lessonStates, minimumLessonState)
  )
  return some(
    qualifyingLessonStates,
    qualifyingLessonState => includes(instructorLessonStates, qualifyingLessonState)
  )
}
