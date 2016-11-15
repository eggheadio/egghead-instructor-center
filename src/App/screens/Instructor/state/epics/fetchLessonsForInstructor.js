import {Observable} from 'rxjs'
import parse from 'parse-link-header'
import reduce from 'lodash/reduce'
import replace from 'lodash/replace'
import isArray from 'lodash/isArray'
import headers from '../../../../state/utils/headers'
import * as instructorActionTypes from '../actions/instructorActionTypes'
import {receiveInstructorLessons} from '../actions'

function handleLessonsResponse(response) {
  return response.json().then((lessons) => {
    const pages = parse(response.headers.get('link'))
    const total = response.headers.get('x-total-count')
    return {pages, total, lessons}
  })
}

// TODO: Transfer to module
// TODO: switch first & for ?
const createQueryString = params => (
  replace(reduce(params, (memo, value, key) => (
    `${memo}&${key}=${isArray(value) ? value.join(',') : value}`
  ), ''), '&', '?')
)

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
