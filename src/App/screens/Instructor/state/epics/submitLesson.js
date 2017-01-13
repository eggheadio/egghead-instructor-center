import {Observable} from 'rxjs'
import {addNotification} from '../../../../state/actions'
import createResourceBody from './utils/createResourceBody'
import {STARTED_SUBMIT_LESSON} from '../actions/instructorActionTypes'
import {startUpdateLessonState, endSubmitLesson} from '../actions'
import headers from '../../../../utils/headers'

export default (action$, store) => (
  action$.ofType(STARTED_SUBMIT_LESSON)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons`, {
          method: 'POST',
          body: JSON.stringify(createResourceBody('lesson', payload.lesson)),
          headers,
        })
          .then(response => {
            if (!response.ok) {
              throw Error(`Submitting your lesson failed - error message: ${response.statusText}`);
            }
            return response
          })
          .then(response => response.json())
          .then(lesson => lesson)
          .catch(error => {
            store.dispatch(
              addNotification({
                type: 'error',
                message: error.message,
              })
            )
          })
      ),
      ({payload}, lesson) => {
        if(payload.lesson.state && !process.env.REACT_APP_FAKE_API) {
          store.dispatch(startUpdateLessonState({
            instructorId: lesson.instructor.id,
            lesson,
            newState: payload.lesson.state,
          }))
        }
        endSubmitLesson()
      }
    )
)
