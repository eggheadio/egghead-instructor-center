import {Observable} from 'rxjs'
import parse from 'parse-link-header'
import * as instructorActionTypes from '../actions/instructorActionTypes'
import {receiveInstructorLessons} from '../actions'
import headers from './utils/headers'
import createQueryString from './utils/createQueryString'

function handleLessonsResponse(response) {
  return response.json().then((lessons) => {
    const pages = parse(response.headers.get('link'))
    const total = response.headers.get('x-total-count')
    return {pages, total, lessons}
  })
}

// I couldn't figure out how to get the Rx ajax operator to give me the headers so I just used fetch...
function fetchLessons(lessonPage) {

  const paramNamesByEnv = process.env.REACT_APP_FAKE_API
    ? {
        page: '_page',
        size: '_limit',
      }
    : {
        page: 'page',
        size: 'size',
      }

  const params = {
    [paramNamesByEnv.page]: lessonPage.page,
    [paramNamesByEnv.size]: lessonPage.size,
    ...(lessonPage.states
      ? {states: lessonPage.states}
      : {}
    ),
  }

  const url = `${lessonPage.lessons_url}${createQueryString(params)}`

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
