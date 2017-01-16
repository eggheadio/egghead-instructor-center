import {includes} from 'lodash'
import {Observable} from 'rxjs'
import parse from 'parse-link-header'
import headers from '../../../../../utils/headers'
import {loginExpiredDescriptionText} from '../../../../../utils/text'
import {removeUser, addNotification} from '../../../../../state/actions'
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
        if (includes([401, 404], response.status)) {
          store.dispatch(removeUser())
          throw Error(loginExpiredDescriptionText)
        }
        else if (!response.ok) {
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
