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
              store.dispatch(
                addNotification({
                  type: 'error',
                  message: `Fetching instructor data failed. Error message: ${response.statusText}`,
                })
              )
            }
            return response
          })
          .then(response => response.json())
          .then(instructor => instructor)
          .catch(error => {
            store.dispatch(
              addNotification({
                type: 'error',
                message: `The instructor data was rejected. Error message: ${error}`,
              })
            )
          })
      ),
      ({payload}, instructor) => (
        endFetchInstructor(instructor)
      )
    )
)
