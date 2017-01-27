import {STARTED_REMOVE_USER} from '../actions/appActionTypes'
import {endRemoveUser} from '../actions'

export default (action$) => (
  action$.ofType(STARTED_REMOVE_USER)
    .map(() => {
      localStorage.removeItem('token')
      return endRemoveUser()
    })
)
