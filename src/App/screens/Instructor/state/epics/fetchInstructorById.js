import {ajax} from 'rxjs/observable/dom/ajax'
import headers from '../../../../state/utils/headers'
import * as instructorActionTypes from '../actions/instructorActionTypes'
import {receiveInstructor} from '../actions'

export default function fetchInstructorById(action$) {
  return action$.ofType(instructorActionTypes.REQUESTED_INSTRUCTOR)
    .map(action => action.payload.instructor_id)
    .switchMap(instructor_id =>
      ajax.getJSON(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/instructors/${instructor_id}`, headers)
        .map(receiveInstructor.bind(null))
    )
}
