import {ajax} from 'rxjs/observable/dom/ajax'
import {REQUESTED_INSTRUCTOR} from '../actions/instructorActionTypes'
import {receiveInstructor} from '../actions'
import headers from './utils/headers'

export default (action$) => (
  action$.ofType(REQUESTED_INSTRUCTOR)
    .map(action => action.payload.instructorId)
    .switchMap(instructorId =>
      ajax.getJSON(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/instructors/${instructorId}`, headers)
        .map(receiveInstructor.bind(null))
    )
)
