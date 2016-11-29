import {STARTED_FETCH_INSTRUCTOR_LESSONS} from '../actions/instructorActionTypes'
import {endFetchInstructorLessons} from '../actions'
import fetchLessons from './utils/fetchLessons'

export default (action$) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR_LESSONS)
    .map(action => action.payload.lessonOptions)
    .switchMap(fetchLessons)
    .map(endFetchInstructorLessons.bind(null))
)
