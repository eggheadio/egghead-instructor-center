import {Observable} from 'rxjs'
import {addNotification} from '../../../../state/actions'
import {STARTED_UPDATE_LESSON_STATE} from '../actions/instructorActionTypes'
import {endUpdateLessonState} from '../actions'
import headers from '../../../../utils/headers'

export default (action$, store) => (
  action$.ofType(STARTED_UPDATE_LESSON_STATE)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(payload.lesson.lesson_url, {
          method: 'PUT',
          body: JSON.stringify({
            ...payload.lesson,
            instructor_id: payload.instructorId,
            state: payload.newState,
          }),
          headers,
        })
          .then(response => {
            if (!response.ok) {
              store.dispatch(
                addNotification({
                  type: 'error',
                  message: `Updating lesson state failed. Error message: ${response.statusText}`,
                })
              )
            }
            return response
          })
          .then(response => response.json())
          .then(updatedLesson => updatedLesson)
          .catch(error => {
            store.dispatch(
              addNotification({
                type: 'error',
                message: `The updated lesson data was rejected. Error message: ${error}`,
              })
            )
          })
      ),
      ({payload}, updatedLesson) => (
        endUpdateLessonState()
      )
    )
)
