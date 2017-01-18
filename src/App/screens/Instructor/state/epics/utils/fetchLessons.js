import {includes} from 'lodash'
import {Observable} from 'rxjs'
import parse from 'parse-link-header'
import getHeaders from '../../../../../utils/getHeaders'
import {loginExpiredDescriptionText} from '../../../../../utils/text'
import {startRemoveUser, startShowNotification} from '../../../../../state/actions'
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
    fetch(createLessonsUrl(lessonOptions), {
      headers: getHeaders(store.getState().appScreen.user.token),
    })
      .then(response => {
        if (includes([401, 404], response.status)) {
          store.dispatch(startRemoveUser())
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
          startShowNotification({
            type: 'error',
            message: error.message,
          })
        )
      })
  )
)
