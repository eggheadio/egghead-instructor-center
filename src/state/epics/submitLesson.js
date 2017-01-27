import {includes} from 'lodash'
import {Observable} from 'rxjs'
import getHeaders from '../../utils/getHeaders'
import {loginExpiredDescriptionText} from '../../utils/text'
import {STARTED_SUBMIT_LESSON} from '../actions/appActionTypes'
import {
  startRemoveUser,
  startShowNotification,
  startUpdateLessonState,
  endSubmitLesson,
} from '../actions'
import createResourceBody from './utils/createResourceBody'

export default (action$, store) => (
  action$.ofType(STARTED_SUBMIT_LESSON)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons`, {
          method: 'POST',
          body: JSON.stringify(createResourceBody('lesson', payload.lesson)),
          headers: getHeaders(store.getState().appScreen.user.token),
        })
          .then(response => {
            if (includes([401, 403, 404], response.status)) {
              store.dispatch(startRemoveUser())
              throw Error(loginExpiredDescriptionText)
            }
            else if (!response.ok) {
              throw Error(`Submitting your lesson failed - error message: ${response.statusText}`);
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
      ({payload}, lesson) => {
        if(payload.lesson.state && !process.env.REACT_APP_FAKE_API) {
          store.dispatch(startUpdateLessonState({
            lesson,
            newState: payload.lesson.state,
          }))
        }
        return endSubmitLesson()
      }
    )
)
