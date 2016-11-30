import {STARTED_FETCH_INSTRUCTOR_LESSONS} from '../actions/instructorActionTypes'
import {endFetchInstructorLessons} from '../actions'
import fetchLessons from './utils/fetchLessons'

export default (action$) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR_LESSONS)
    .switchMap(
      ({payload}) => fetchLessons(payload.lessonOptions),
      ({payload}, lessonPage) => (
        endFetchInstructorLessons(lessonPage)
      )
    )
)
