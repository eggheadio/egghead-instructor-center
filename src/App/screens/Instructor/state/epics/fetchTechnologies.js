import {Observable} from 'rxjs'
import headers from '../../../../utils/headers'
import {loginExpiredDescriptionText} from '../../../../utils/text'
import {removeUser, addNotification} from '../../../../state/actions'
import {STARTED_FETCH_TECHNOLOGIES} from '../actions/instructorActionTypes'
import {endFetchTechnologies} from '../actions'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_TECHNOLOGIES)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/technologies`, {headers})
          .then(response => {
            if (response.status === 401) {
              store.dispatch(removeUser())
              throw Error(loginExpiredDescriptionText)
            }
            else if (!response.ok) {
              throw Error(`Fetching technology data failed - error message: ${response.statusText}`);
            }
            return response
          })
          .then(response => response.json())
          .then(technologies => technologies.technologies)
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
