import {REQUESTED_INSTRUCTOR_LESSONS} from '../actions/instructorActionTypes'
import {receiveInstructorLessons} from '../actions'
import fetchLessons from './utils/fetchLessons'

export default (action$) => (
  action$.ofType(REQUESTED_INSTRUCTOR_LESSONS)
    .map(action => action.payload.lessonPage)
    .switchMap(fetchLessons)
    .map(receiveInstructorLessons.bind(null))
)
