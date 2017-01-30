import fetchLessons from './utils/fetchLessons'
import {STARTED_FETCH_ALL_LESSONS} from '../actions/actionTypes'
import {endFetchAllLessons} from '../actions'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_ALL_LESSONS)
    .switchMap(
      ({payload}) => fetchLessons(payload.lessonOptions, store),
      ({payload}, lessonPage) => (
        endFetchAllLessons(lessonPage)
      )
    )
)
