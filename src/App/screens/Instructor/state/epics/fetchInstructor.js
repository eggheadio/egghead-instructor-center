import {Observable} from 'rxjs'
import {addNotification} from '../../../../state/actions'
import {STARTED_FETCH_INSTRUCTOR} from '../actions/instructorActionTypes'
import {endFetchInstructor} from '../actions'
import headers from '../../../../utils/headers'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/instructors/${payload.instructorId}`, {headers})
          .then(response => {
            if (!response.ok) {
              throw Error(`Fetching instructor data failed - error message: ${response.statusText}`);
            }
            return response
          })
          .then(response => response.json())
          .then(instructor => instructor)
          .catch(error => {
            store.dispatch(
              addNotification({
                type: 'error',
                message: error.message,
              })
            )
          })
      ),
      ({payload}, instructor) => (
        endFetchInstructor(instructor)
      )
    )
)
