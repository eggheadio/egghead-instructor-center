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

export default (lessonOptions) => (
  Observable.fromPromise(
    fetch(createLessonsUrl(lessonOptions), {headers})
      .then(handleLessonsResponse)
  )
)
