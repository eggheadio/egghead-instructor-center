import {ajax} from 'rxjs/observable/dom/ajax'
import {STARTED_FETCH_INSTRUCTOR} from '../actions/instructorActionTypes'
import {endFetchInstructor} from '../actions'
import headers from './utils/headers'

export default (action$) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR)
    .map(action => action.payload.instructorId)
    .switchMap(instructorId =>
      ajax.getJSON(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/instructors/${instructorId}`, headers)
        .map(endFetchInstructor.bind(null))
    )
)
