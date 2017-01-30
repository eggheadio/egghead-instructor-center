import fetchLessons from './utils/fetchLessons'
import {STARTED_FETCH_INSTRUCTOR_LESSONS} from '../actions/actionTypes'
import {endFetchInstructorLessons} from '../actions'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR_LESSONS)
    .switchMap(
      ({payload}) => fetchLessons(payload.lessonOptions, store),
      ({payload}, lessonPage) => (
        endFetchInstructorLessons(lessonPage)
      )
    )
)
