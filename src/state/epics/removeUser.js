import {STARTED_REMOVE_USER} from 'state/actions/appActionTypes'
import {endRemoveUser} from 'state/actions'

export default (action$) => (
  action$.ofType(STARTED_REMOVE_USER)
    .map(() => {
      localStorage.removeItem('token')
      return endRemoveUser()
    })
)
