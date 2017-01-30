import {includes} from 'lodash'
import {Observable} from 'rxjs'
import getHeaders from 'utils/getHeaders'
import {loginExpiredDescriptionText} from 'utils/text'
import {STARTED_FETCH_TECHNOLOGIES} from 'state/actions/actionTypes'
import {startRemoveUser, startShowNotification, endFetchTechnologies} from 'state/actions'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_TECHNOLOGIES)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/technologies`, {
          headers: getHeaders(store.getState().appScreen.user.token),
        })
          .then(response => {
            if (includes([401, 403, 404], response.status)) {
              store.dispatch(startRemoveUser())
              throw Error(loginExpiredDescriptionText)
            }
            else if (!response.ok) {
              throw Error(`Fetching technology data failed - error message: ${response.statusText}`)
            }
            return response
          })
          .then(response => response.json())
          .then(technologies => technologies.technologies)
          .catch(error => {
            store.dispatch(
              startShowNotification({
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
