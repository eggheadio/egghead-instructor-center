import {ajax} from 'rxjs/observable/dom/ajax';
import * as InstructorScreenActionType from '../actions/InstructorScreenActionType';

import {receiveInstructor} from '../actions';

export const headers = {
  "Authorization": `Bearer ${process.env.REACT_APP_EGGHEAD_JWT}`,
  "Content-Type": "application/json"
};

export default function fetchInstructorById(action$) {
  return action$.ofType(InstructorScreenActionType.REQUESTED_INSTRUCTOR)
    .map(action => action.payload.instructor_id)
    .switchMap(instructor_id =>
      ajax.getJSON(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/instructors/${instructor_id}`, headers)
        .map(receiveInstructor.bind(null))
    );
}