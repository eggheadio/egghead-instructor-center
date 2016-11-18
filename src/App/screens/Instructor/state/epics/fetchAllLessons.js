import {REQUESTED_ALL_LESSONS} from '../actions/instructorActionTypes'
import {receiveAllLessons} from '../actions'
import fetchLessons from './utils/fetchLessons'

export default (action$) => (
  action$.ofType(REQUESTED_ALL_LESSONS)
    .map(action => action.payload.lessonPage)
    .switchMap(fetchLessons)
    .map(receiveAllLessons.bind(null))
)
