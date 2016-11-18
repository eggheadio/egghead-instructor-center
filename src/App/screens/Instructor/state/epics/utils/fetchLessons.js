import {Observable} from 'rxjs'
import parse from 'parse-link-header'
import headers from './headers'
import createLessonsUrl from './createLessonsUrl'

const handleLessonsResponse = (response) => (
  response.json().then((lessons) => {
    const pages = parse(response.headers.get('link'))
    const total = response.headers.get('x-total-count')
    return {pages, total, lessons}
  })
)

// I couldn't figure out how to get the Rx ajax operator to give me the headers so I just used fetch...
export default (lessonPage) => (
  Observable.fromPromise(
    fetch(createLessonsUrl(lessonPage), {headers})
      .then(handleLessonsResponse)
  )
)
