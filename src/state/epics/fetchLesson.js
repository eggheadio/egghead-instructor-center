import {includes} from 'lodash'
import {Observable} from 'rxjs'
import getHeaders from 'utils/getHeaders'
import {loginExpiredDescriptionText} from 'utils/text'
import {STARTED_FETCH_LESSON} from 'state/actions/appActionTypes'
import {startRemoveUser, startShowNotification, endFetchLesson} from 'state/actions'

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_LESSON)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons/${payload.lessonSlug}`, {
          headers: getHeaders(store.getState().appScreen.user.token),
        })
          .then(response => {
            if (includes([401, 403, 404], response.status)) {
              store.dispatch(startRemoveUser())
              throw Error(loginExpiredDescriptionText)
            }
            else if (!response.ok) {
              throw Error(`Fetching lesson data failed - error message: ${response.statusText}`);
            }
            return response
          })
          .then(response => response.json())
          .then(lesson => lesson)
          .catch(error => {
            store.dispatch(
              startShowNotification({
                type: 'error',
                message: error.message,
              })
            )
          })
      ),
      ({payload}, lesson) => (
        endFetchLesson(lesson)
      )
    )
)
