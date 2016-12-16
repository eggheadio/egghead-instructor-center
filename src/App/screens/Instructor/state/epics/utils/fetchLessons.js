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
          store.dispatch(
            addNotification({
              type: 'error',
              message: `Fetching lessons failed. Error message: ${response.statusText}`,
            })
          )
        }
        return response
      })
      .then(handleLessonsResponse)
      .catch(error => {
        store.dispatch(
          addNotification({
            type: 'error',
            message: `The lessons data was rejected. Error message: ${error}`,
          })
        )
      })
  )
)
