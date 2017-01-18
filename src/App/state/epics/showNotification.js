import {STARTED_SHOW_NOTIFICATION} from '../actions/appActionTypes'
import {endShowNotification} from '../actions'

export default (action$) => (
  action$.ofType(STARTED_SHOW_NOTIFICATION)
    .delay(3000)
    .mapTo(endShowNotification())
)
