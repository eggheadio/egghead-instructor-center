import {STARTED_FETCH_INSTRUCTOR_LESSONS} from '../actions/instructorActionTypes'
import {endFetchInstructorLessons} from '../actions'
import fetchLessons from './utils/fetchLessons'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR_LESSONS)
    .switchMap(
      ({payload}) => fetchLessons(payload.lessonOptions, store),
      ({payload}, lessonPage) => (
        endFetchInstructorLessons(lessonPage)
      )
    )
)
