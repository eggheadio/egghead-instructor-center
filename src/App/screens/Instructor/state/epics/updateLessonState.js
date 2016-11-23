import {ajax} from 'rxjs/observable/dom/ajax'
import {STARTED_UPDATE_LESSON_STATE} from '../actions/instructorActionTypes'
import {endUpdateLessonState} from '../actions'
import headers from './utils/headers'

export default (action$) => (
  action$.ofType(STARTED_UPDATE_LESSON_STATE)
    .switchMap(
      ({payload}) => ajax.put(payload.lessonUrl, {lesson: {state: payload.newState}}, headers),
      ({payload}, {lesson}) => endUpdateLessonState({payload, lesson})
    )
)
