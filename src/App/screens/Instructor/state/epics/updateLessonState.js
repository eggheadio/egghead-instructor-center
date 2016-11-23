import {Observable} from 'rxjs'
import {STARTED_UPDATE_LESSON_STATE} from '../actions/instructorActionTypes'
import {endUpdateLessonState} from '../actions'
import headers from './utils/headers'

export default (action$) => (
  action$.ofType(STARTED_UPDATE_LESSON_STATE)
    .switchMap(
      ({payload}) => Observable.ajax({
        type: 'PUT',
        headers,
        crossDomain: true,
        url: payload.lessonUrl,
        body: {
          state: payload.newState,
        },
      }),
      ({payload}, {lesson}) => (
        endUpdateLessonState({payload, lesson})
      )
    )
)
