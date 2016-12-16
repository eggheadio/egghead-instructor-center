import {STARTED_FETCH_ALL_LESSONS} from '../actions/instructorActionTypes'
import {endFetchAllLessons} from '../actions'
import fetchLessons from './utils/fetchLessons'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_ALL_LESSONS)
    .switchMap(
      ({payload}) => fetchLessons(payload.lessonOptions, store),
      ({payload}, lessonPage) => (
        endFetchAllLessons(lessonPage)
      )
    )
)
