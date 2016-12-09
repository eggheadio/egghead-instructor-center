import {Observable} from 'rxjs'
import {STARTED_SUBMIT_LESSON} from '../actions/instructorActionTypes'
import {endSubmitLesson} from '../actions'
import headers from '../../../../utils/headers'

export default (action$) => (
  action$.ofType(STARTED_SUBMIT_LESSON)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/lessons`, {
          method: 'POST',
          body: JSON.stringify(payload.lesson),
          headers,
        })
          .then(response => response.json())
          .then(lesson => lesson)
          .catch(error => console.error(error))
      ),
      ({payload}, lesson) => (
        endSubmitLesson()
      )
    )
)
