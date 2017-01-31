import {includes} from 'lodash'
import {Observable} from 'rxjs'
import getHeaders from 'utils/getHeaders'
import {loginExpiredDescriptionText} from 'utils/text'
import {lessonStatesUrls} from 'utils/lessonStates'
import {STARTED_UPDATE_LESSON_STATE} from 'state/actions/actionTypes'
import {startRemoveUser, startShowNotification, endUpdateLessonState} from 'state/actions'

export default (action$, store) => (
  action$.ofType(STARTED_UPDATE_LESSON_STATE)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(
          payload.lesson[lessonStatesUrls[payload.newState]],
          {
            method: 'POST',
            headers: getHeaders(store.getState().appScreen.user.token),
          }
        )
          .then(response => {
            if (includes([401, 403], response.status)) {
              store.dispatch(startRemoveUser())
              throw Error(loginExpiredDescriptionText)
            }
            else if (!response.ok) {
              throw Error(`Updating lesson state failed - error message: ${response.statusText}`)
            }
            return response
          })
          .then(response => response.json())
          .then(updatedLesson => updatedLesson)
          .catch(error => {
            store.dispatch(
              startShowNotification({
                type: 'error',
                message: error.message,
              })
            )
          })
      ),
      ({payload}, updatedLesson) => (
        endUpdateLessonState()
      )
    )
)
