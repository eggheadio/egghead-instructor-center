import {Observable} from 'rxjs'
import {STARTED_FETCH_INSTRUCTOR} from '../actions/instructorActionTypes'
import {endFetchInstructor} from '../actions'
import headers from '../../../../utils/headers'

export default (action$) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/instructors/${payload.instructorId}`, {headers})
          .then(response => response.json())
          .then(instructor => instructor)
          .catch(error => console.error(error))
      ),
      ({payload}, instructor) => (
        endFetchInstructor(instructor)
      )
    )
)
