import {Observable} from 'rxjs'
import {addNotification} from '../../../../state/actions'
import {STARTED_FETCH_TECHNOLOGIES} from '../actions/instructorActionTypes'
import {endFetchTechnologies} from '../actions'
import headers from '../../../../utils/headers'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_TECHNOLOGIES)
    .switchMap(
      ({payload}) => Observable.fromPromise(

        // TODO: hit this log - why isn't action creator dispatching STARTED_FETCH_TECHNOLOGIES action?
        console.log('hit epic, not working') ||

        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/technologies`, {headers})
          .then(response => {
            if (!response.ok) {
              throw Error(`Fetching technology data failed - error message: ${response.statusText}`);
            }
            return response
          })
          .then(response => response.json())
          .then(technologies => technologies)
          .catch(error => {
            store.dispatch(
              addNotification({
                type: 'error',
                message: error.message,
              })
            )
          })
      ),
      ({payload}, technologies) => (
        endFetchTechnologies(technologies)
      )
    )
)
