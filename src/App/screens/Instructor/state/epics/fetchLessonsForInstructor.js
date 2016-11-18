import {Observable} from 'rxjs'
import parse from 'parse-link-header'
import {REQUESTED_INSTRUCTOR_LESSONS} from '../actions/instructorActionTypes'
import {receiveInstructorLessons} from '../actions'
import headers from './utils/headers'
import createLessonsUrl from './utils/createLessonsUrl'

const handleLessonsResponse = (response) => (
  response.json().then((lessons) => {
    const pages = parse(response.headers.get('link'))
    const total = response.headers.get('x-total-count')
    return {pages, total, lessons}
  })
)

// I couldn't figure out how to get the Rx ajax operator to give me the headers so I just used fetch...
const fetchLessons = (lessonPage) => (
  Observable.fromPromise(
    fetch(createLessonsUrl(lessonPage), {headers})
    .then(handleLessonsResponse)
  )
)

export default (action$) => (
  action$.ofType(REQUESTED_INSTRUCTOR_LESSONS)
    .map(action => action.payload.lessonPage)
    .switchMap(fetchLessons)
    .map(receiveInstructorLessons.bind(null))
)
