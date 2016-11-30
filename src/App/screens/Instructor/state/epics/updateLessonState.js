import {Observable} from 'rxjs'
import {STARTED_UPDATE_LESSON_STATE} from '../actions/instructorActionTypes'
import {endUpdateLessonState} from '../actions'
import headers from './utils/headers'

export default (action$) => (
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
          .then(response => response.json())
          .then(updatedLesson => updatedLesson)
          .catch(error => console.error(error))
      ),
      ({payload}, {updatedLesson}) => (
        endUpdateLessonState()
      )
    )
)
