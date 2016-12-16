import {Observable} from 'rxjs'
import {addNotification} from '../../../../../state/actions'
import parse from 'parse-link-header'
import headers from '../../../../../utils/headers'
import createLessonsUrl from './createLessonsUrl'

const handleLessonsResponse = (response) => (
  response.json()
    .then((lessons) => {
      const pages = parse(response.headers.get('link'))
      const total = response.headers.get('x-total-count')
      return {pages, total, lessons}
    })
)

export default (lessonOptions, store) => (
  Observable.fromPromise(
    fetch(createLessonsUrl(lessonOptions), {headers})
      .then(response => {
        if (!response.ok) {
          throw Error(`Fetching lessons failed - error message: ${response.statusText}`);
        }
        return response
      })
      .then(handleLessonsResponse)
      .catch(error => {
        store.dispatch(
          addNotification({
            type: 'error',
            message: error.message,
          })
        )
      })
  )
)
