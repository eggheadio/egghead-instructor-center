import {includes} from 'lodash'
import {Observable} from 'rxjs'
import getHeaders from '../../utils/getHeaders'
import {loginExpiredDescriptionText} from '../../utils/text'
import {STARTED_UPDATE_LESSON_STATE} from '../actions/appActionTypes'
import {startRemoveUser, startShowNotification} from '../actions'
import {endUpdateLessonState} from '../actions'

const lessonStateUrls = {
  'cancelled': 'cancel_url',
  'accepted': 'accept_url',
  'claimed': 'claim_url',
  'submitted': 'submit_url',
  'rejected': 'reject_url',
  'updated': 'apply_update_url',
  'approved': 'approve_url',
  'published': 'publish_url',
  'flagged': 'flag_url',
  'revised': 'revise_url',
  'retired': 'retire_url',
}

export default (action$, store) => (
  action$.ofType(STARTED_UPDATE_LESSON_STATE)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(
          process.env.REACT_APP_FAKE_API 
            ? payload.lesson.lesson_url
            : payload.lesson[lessonStateUrls[payload.newState]],
          {
            method: process.env.REACT_APP_FAKE_API
              ? 'PUT'
              : 'POST',
            body: process.env.REACT_APP_FAKE_API
              ? JSON.stringify({
                ...payload.lesson,
                state: payload.newState,
              })
              : null,
            headers: getHeaders(store.getState().appScreen.user.token),
          }
        )
          .then(response => {
            if (includes([401, 403, 404], response.status)) {
              store.dispatch(startRemoveUser())
              throw Error(loginExpiredDescriptionText)
            }
            else if (!response.ok) {
              throw Error(`Updating lesson state failed - error message: ${response.statusText}`);
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
