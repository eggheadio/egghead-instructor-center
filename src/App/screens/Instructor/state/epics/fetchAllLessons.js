import {STARTED_FETCH_ALL_LESSONS} from '../actions/instructorActionTypes'
import {endFetchAllLessons} from '../actions'
import fetchLessons from './utils/fetchLessons'

export default (action$) => (
  action$.ofType(STARTED_FETCH_ALL_LESSONS)
    .switchMap(
      ({payload}) => fetchLessons(payload.lessonOptions),
      ({payload}, lessonPage) => (
        endFetchAllLessons(lessonPage)
      )
    )
)
