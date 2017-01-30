import {STARTED_REMOVE_USER} from 'state/actions/actionTypes'
import {endRemoveUser} from 'state/actions'

export default (action$) => (
  action$.ofType(STARTED_REMOVE_USER)
    .map(() => {
      localStorage.removeItem('token')
      return endRemoveUser()
    })
)
