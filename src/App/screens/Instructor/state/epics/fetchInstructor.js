import {includes} from 'lodash'
import {Observable} from 'rxjs'
import headers from '../../../../utils/headers'
import {loginExpiredDescriptionText} from '../../../../utils/text'
import {startRemoveUser, startShowNotification} from '../../../../state/actions'
import {STARTED_FETCH_INSTRUCTOR} from '../actions/instructorActionTypes'
import {endFetchInstructor} from '../actions'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_INSTRUCTOR)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/instructors/${payload.instructorId}`, {headers})
          .then(response => {
            if (includes([401, 404], response.status)) {
              store.dispatch(startRemoveUser())
              throw Error(loginExpiredDescriptionText)
            }
            else if (!response.ok) {
              throw Error(`Fetching instructor data failed - error message: ${response.statusText}`);
            }
            return response
          })
          .then(response => response.json())
          .then(instructor => instructor)
          .catch(error => {
            store.dispatch(
              startShowNotification({
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
