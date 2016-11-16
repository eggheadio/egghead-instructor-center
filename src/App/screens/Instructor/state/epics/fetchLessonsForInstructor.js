import {Observable} from 'rxjs'
import parse from 'parse-link-header'
import * as instructorActionTypes from '../actions/instructorActionTypes'
import {receiveInstructorLessons} from '../actions'
import headers from './utils/headers'
import createLessonsUrl from './utils/createLessonsUrl'

function handleLessonsResponse(response) {
  return response.json().then((lessons) => {
    const pages = parse(response.headers.get('link'))
    const total = response.headers.get('x-total-count')
    return {pages, total, lessons}
  })
}

function fetchLessons(lessonPage) {

  const url = createLessonsUrl(lessonPage)

  // I couldn't figure out how to get the Rx ajax operator to give me the headers so I just used fetch...
  return Observable.fromPromise(
    fetch(url, {headers})
      .then(handleLessonsResponse))
}

export default function fetchLessonsForInstructor(action$) {
  return action$.ofType(instructorActionTypes.REQUESTED_LESSONS_FOR_INSTRUCTOR)
    .map(action => action.payload.lessonPage)
    .switchMap(fetchLessons)
    .map(receiveInstructorLessons.bind(null))
}
